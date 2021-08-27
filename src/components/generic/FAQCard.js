const FAQCard = ({item, parentID, index}) => {
  return (
    <div className="accordion-item">
      <h2 className="accordion-header" id={`heading-${index}`}>
        <button
          className="accordion-button collapsed"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target={`#collapse-${index}`}
          aria-expanded="false"
          aria-controls={`#collapse-${index}`}
        >
          {item.title}
        </button>
      </h2>
      <div
        id={`collapse-${index}`}
        className="accordion-collapse collapse"
        aria-labelledby={`heading-${index}`}
        data-bs-parent={`#${parentID}`}
      >
        <div className="accordion-body">{item.content}</div>
      </div>
    </div>
  );
};

export default FAQCard;
