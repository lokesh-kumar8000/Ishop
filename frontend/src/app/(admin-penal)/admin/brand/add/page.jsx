"use client";
import { axioIsnstance, createSlug, getCookie, notify } from "@/library/helper";
import React, { useRef } from "react";

function BrandForm() {
  const token = getCookie('admin_token');
  const slugRef = useRef();
  const nameRef = useRef(); 
  const genrateSlug = () => {
    const slug = createSlug(nameRef.current.value);
    slugRef.current.value = slug;
  };
  const genrateSlugs = () =>{
    const slug = createSlug(slugRef.current.value);
    slugRef.current.value = slug;
  }

  const handlerSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(); 
    formData.append("name", nameRef.current.value);
    formData.append("slug", slugRef.current.value);
    formData.append("image", e.target.brand_logo.files[0]);

    if (nameRef.current.value === "" || slugRef.current.value === "") {
      notify('Enter name and slug', 'warning' );
    } else {
      axioIsnstance.post("brand/create", formData,{
          headers: {
            Authorization: token,
          },
        })
        .then((response) => {
          if (response.data.success) {
            console.log(response);
            notify(response.data.message, response.data.success);
            nameRef.current.value = "";
            slugRef.current.value = "";
          }
        })
        .catch((error) => {
          if (error.response.status === 400) {
            notify(error.response.data.message, error.response.data.success);
          }
          notify(error.response.data.message, error.response.data.success);
          console.log(error);
        });
    }
  };

  return (
    <div className="max-w-lg mx-auto mt-10 bg-white p-8 rounded-2xl shadow-lg">
      <h2 className="text-2xl font-semibold mb-6 text-gray-800">
        ➕ Add New Brand
      </h2>

      <form onSubmit={handlerSubmit} className="space-y-6">
        {/* Name */}
        <div>
          <label className="block text-sm font-medium text-gray-600 mb-2">
            Brand Name
          </label>
          <input
            type="text"
            ref={nameRef}
            onChange={genrateSlug}
            placeholder="Enter category name"
            className="w-full border border-gray-300 px-4 py-3 rounded-xl outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
          />
        </div>

        {/* Slug */}
        <div>
          <label className="block text-sm font-medium text-gray-600 mb-2">
            Slug
          </label>
          <input
            type="text"
            ref={slugRef}
            onChange={genrateSlugs}
            placeholder="Enter category slug"
            className="w-full border border-gray-300 px-4 py-3 rounded-xl outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
          />
        </div>

        {/* Logo Upload */}
        <div>
          <label className="block text-sm font-medium text-gray-600 mb-2">
            Brand Logo
          </label>
          <div className="flex items-center gap-5">
            {/* Upload Box */}
            <label className="flex-1 flex flex-col items-center justify-center border-2 border-dashed border-gray-300 rounded-xl cursor-pointer p-6 hover:border-blue-400 hover:bg-blue-50 transition">
              <span className="text-gray-500 text-sm">Click to upload</span>
              <span className="text-xs text-gray-400">PNG, JPG up to 2MB</span>
              <input
                type="file"
                name="brand_logo"
                accept="/image"
                className="hidden"
              />
            </label>
          </div>
        </div>

        {/* Submit */}
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-3 rounded-xl font-medium shadow-md hover:bg-blue-700 transition"
        >
          Save Brand
        </button>
      </form>
    </div>
  );
}

export default BrandForm;
