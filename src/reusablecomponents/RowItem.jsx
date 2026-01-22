function RowItem({ color, text, status, bg }) {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        marginTop: 10,
        fontSize: 13,
      }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
        <span
          style={{
            width: 8,
            height: 8,
            borderRadius: "50%",
            background: color,
          }}
        />
        {text}
      </div>

      <Tag
        style={{
          background: bg,
          border: "none",
          color: color,
          fontSize: 11,
          borderRadius: 12,
        }}
      >
        {status}
      </Tag>
    </div>
  );
}

export default RowItem;