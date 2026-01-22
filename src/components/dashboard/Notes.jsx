import React from 'react'
import CardHeading from '../../reusablecomponents/CardHeading'
import { ChartArea, CheckCircle, ChevronRight, Circle, Edit2, ScrollText } from 'lucide-react'

export default function Notes() {
    const notesData = [
  {
    id: 1,
    status: "pending", 
    title: "Phoenix footer section.",
    description: "Adding google play buttons.",
    tags: ["Today", "Waiting Feedback"],
  },
  {
    id: 2,
    status: "done",
    title: "Phoenix header section.",
    description: "Researchingn to understand its function.",
    tags: ["Today", "Waiting Feedback"],
  },
  {
    id: 2,
    status: "done",
    title: "Phoenix header section.",
    description: "Researchingn to understand its function.",
    tags: ["Today", "Waiting Feedback"],
  },
];
  return (
    <>
      <CardHeading
        title="Notes"
        icon={<ScrollText size={16} />}
        actionText="See All"
        actionIcon={<ChevronRight size={14} />}
        />

        <div className="notes-card">
      {notesData.map((item) => (
        <div key={item.id} className="note-item">
          <div className="note-header">
            {item.status === "done" ? (
              <CheckCircle size={16} className="icon-done" />
            ) : (
                <Circle size={16} className="icon-pending" />
            )}

            <div>
              <p className="note-title">{item.title}</p>
              <p className="note-desc">{item.description}</p>
            </div>
          </div>

          <div className="note-tags">
            {item.tags.map((tag, index) => (
                <span key={index} className={`tag`}>
                {tag}
              </span>
            ))}
          </div>
        </div>
      ))}

      <button className="new-note-btn">
        <Edit2 size={16} />
        New Note
      </button>
    </div>
            </>
  )
}
