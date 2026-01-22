import { ChevronRight, Timer } from 'lucide-react'
import React from 'react'

export default function CardHeading(
    {
  title,
  icon,
  actionText = "See All",
  actionIcon,
  onActionClick,
}
) {
  return (
 
     <div className="cardheadin">
      <div className="headingcard">
        {icon && <span className="heading-icon">{icon}</span>}
        <span>{title}</span>
      </div>

      {actionText && (
        <div className="seebtn" onClick={onActionClick}>
          {actionText}
          {actionIcon && <span className="action-icon">{actionIcon}</span>}
        </div>
      )}
    </div>
  )
}
