import React from 'react'
import { Search, SlidersHorizontal } from "lucide-react";

export default function Searchbar({ value, onChange }) {
  return (
    <div className="search-bar">
      <Search size={18} className="search-icon" />

      <input
        type="text"
        placeholder="Search by name or day..."
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />

      <SlidersHorizontal size={18} className="filter-icon" />
    </div>
  )
}
