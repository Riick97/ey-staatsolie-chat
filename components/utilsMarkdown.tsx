export const wordDocumentRenderer = {
  h1: ({ node, ...props }: any) => (
    <h1
      style={{
        fontSize: "24px",
        borderBottom: "2px solid #5083C1",
        paddingBottom: "10px",
        fontFamily: "Merriweather, serif",
        marginBottom: "20px",
        marginTop: "40px",
        color: "#5083C1",
      }}
      {...props}
    />
  ),
  h2: ({ node, ...props }: any) => (
    <h2
      style={{
        fontSize: "20px",
        fontFamily: "Quicksand, sans-serif",
        marginBottom: "10px",
        marginTop: "45px",
        color: "#434343",
      }}
      {...props}
    />
  ),
  p: ({ node, ...props }: any) => (
    <p
      style={{
        fontSize: "16px",
        fontFamily: "Quicksand, sans-serif",
        margin: "10px 0",
        lineHeight: "1.6",
        color: "#DDD",
      }}
      {...props}
    />
  ),
  a: ({ node, ...props }: any) => (
    <a
      style={{
        color: "#007bff",
        textDecoration: "underline",
      }}
      {...props}
    />
  ),
  blockquote: ({ node, ...props }: any) => (
    <blockquote
      style={{
        borderLeft: "4px solid #ccc",
        paddingLeft: "20px",
        fontStyle: "italic",
        color: "#434343",
      }}
      {...props}
    />
  ),
  ul: ({ node, ...props }: any) => (
    <ul
      style={{
        fontSize: "16px",
        paddingLeft: "40px",
        listStyleType: "disc",
        listStylePosition: "inside",
        color: "#434343",
      }}
      {...props}
    />
  ),
  hr: ({ node, ...props }: any) => (
    <hr
      style={{
        borderTop: "2px solid gray",
        marginTop: "50px",
        marginBottom: "100px",
      }}
      {...props}
    />
  ),
  table: ({ node, ...props }: any) => (
    <table
      style={{
        width: "100%",
        borderCollapse: "collapse",
        marginBottom: "20px",
      }}
      {...props}
    />
  ),
  th: ({ node, ...props }: any) => (
    <th
      style={{
        borderBottom: "2px solid gray",
        padding: "8px",
        textAlign: "left",
      }}
      {...props}
    />
  ),
  td: ({ node, ...props }: any) => (
    <td
      style={{
        borderBottom: "1px solid gray",
        padding: "8px",
        textAlign: "left",
      }}
      {...props}
    />
  ),
  img: ({ node, ...props }: any) => (
    <img
      style={{
        maxWidth: "100%",
      }}
      {...props}
    />
  ),
};

export const changelogRenderer = {
  ...wordDocumentRenderer, // inherit from your existing renderer
  h1: ({ node, ...props }: any) => (
    // Custom style for version numbers
    <h1
      style={{
        fontSize: "24px",
        borderBottom: "2px solid #CCC",
        paddingBottom: "10px",
        fontFamily: "Merriweather, serif",
        marginBottom: "20px",
        marginTop: "40px",
        color: "#DDD",
        backgroundColor: "#444",
        paddingLeft: "10px",
      }}
      {...props}
    />
  ),
  h2: ({ node, ...props }: any) => (
    // Custom style for 'Added', 'Changed', etc.
    <h2
      style={{
        fontSize: "20px",
        fontFamily: "Quicksand, sans-serif",
        marginBottom: "10px",
        marginTop: "45px",
        borderBottom: "1px solid #ccc",
        color: "#DDD",
      }}
      {...props}
    />
  ),
  h3: ({ node, ...props }: any) => (
    <h3
      style={{
        fontSize: "18px",
        fontFamily: "Quicksand, sans-serif",
        marginBottom: "10px",
        marginTop: "35px",
        color: "#DDD",
      }}
      {...props}
    />
  ),
  ul: ({ node, ...props }: any) => (
    <ul
      style={{
        fontSize: "16px",
        listStyleType: "disc",
        listStylePosition: "outside",
        paddingLeft: "40px",
        color: "#DDD",
      }}
    >
      {props.children}
    </ul>
  ),
  ol: ({ node, ...props }: any) => (
    <ol
      style={{
        fontSize: "16px",
        listStyleType: "decimal",
        listStylePosition: "outside",
        paddingLeft: "40px",
        color: "#DDD",
      }}
    >
      {props.children}
    </ol>
  ),
  li: ({ node, ...props }: any) => (
    <li
      style={{
        marginBottom: "8px",
        display: "list-item",
      }}
    >
      <span
        style={{
          display: "inline",
          wordWrap: "break-word",
        }}
      >
        {props.children}
      </span>
    </li>
  ),
};
