import React, { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { MdNoteAlt } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import api from "../../services/api";
import Buttons from "../../utils/Buttons";
import toast from "react-hot-toast";

const CreateNote = () => {
  const navigate = useNavigate();

  const [editorContent, setEditorContent] = useState("");
  const [originalContent, setOriginalContent] = useState("");
  const [isConverted, setIsConverted] = useState(false);

  const [loading, setLoading] = useState(false);
  const [converting, setConverting] = useState(false);

  const handleChange = (content) => {
    setEditorContent(content);
  };

  const handleToggleConversion = async () => {
    // 🔁 Case 1: Hinglish → Original
    if (isConverted) {
      setEditorContent(originalContent);
      setIsConverted(false);
      toast.success("Reverted to Original Text");
      return;
    }

    // 🔄 Case 2: Original → Hinglish
    if (!editorContent.trim()) {
      return toast.error("Nothing to convert");
    }

    try {
      setConverting(true);

      // ✅ Save original before conversion
      setOriginalContent(editorContent);

      const response = await api.post("/notes/convert-hinglish", {
        text: editorContent,
      });

      // ✅ FIX: Backend returns { "convertedText": "..." }
      // No need to JSON.parse - it's already a JS object
      const convertedText = response.data.convertedText;

      setEditorContent(convertedText);
      setIsConverted(true);

      toast.success("Converted to Hinglish!");
    } catch (err) {
      console.error("Conversion error:", err);
      
      // Better error handling
      if (err.response?.status === 401) {
        toast.error("Please log in to use this feature");
      } else if (err.response?.status === 500) {
        toast.error("Server error. Please try again.");
      } else {
        toast.error("Failed to convert to Hinglish");
      }
    } finally {
      setConverting(false);
    }
  };

  const handleSubmit = async () => {
    if (!editorContent.trim()) {
      return toast.error("Note content is required");
    }

    try {
      setLoading(true);

      await api.post("/notes", {
        content: editorContent,
      });

      toast.success("Note created successfully");
      navigate("/notes");
    } catch (err) {
      console.error(err);
      toast.error("Error creating note");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-[calc(100vh-74px)] p-10">
      <div className="flex items-center gap-3 pb-5">
        <h1 className="font-montserrat text-slate-800 sm:text-4xl text-2xl font-semibold">
          Create New Note
        </h1>
        <MdNoteAlt className="text-slate-700 text-4xl" />

        <button
          onClick={handleToggleConversion}
          disabled={converting}
          className="ml-auto bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 disabled:bg-gray-400 disabled:cursor-not-allowed transition-colors"
        >
          {converting
            ? "Converting..."
            : isConverted
            ? "Convert to Original"
            : "Convert to Hinglish"}
        </button>
      </div>

      <div className="h-72 sm:mb-20 lg:mb-14 mb-28">
        <ReactQuill
          className="h-full"
          value={editorContent}
          onChange={handleChange}
          modules={{
            toolbar: [
              [{ header: [1, 2, 3, 4, 5, 6] }],
              [{ size: [] }],
              ["bold", "italic", "underline", "strike", "blockquote"],
              [
                { list: "ordered" },
                { list: "bullet" },
                { indent: "-1" },
                { indent: "+1" },
              ],
              ["clean"],
            ],
          }}
        />
      </div>

      <Buttons
        disabled={loading}
        onClickhandler={handleSubmit}
        className="bg-customRed text-white px-4 py-2 hover:text-slate-300 rounded-sm"
      >
        {loading ? "Loading..." : "Create Note"}
      </Buttons>
    </div>
  );
};

export default CreateNote;