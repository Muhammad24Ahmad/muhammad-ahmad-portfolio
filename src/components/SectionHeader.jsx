function SectionHeader({ label, title, description, align = "left" }) {
  const alignment =
    align === "center" ? "text-center mx-auto" : "text-left";

  return (
    <div className={`max-w-3xl mb-14 ${alignment}`}>
      <p className="tag-pill w-fit mb-4">{label}</p>
      <h2 className="text-3xl md:text-4xl lg:text-[2.75rem] font-bold text-white leading-tight mb-4">
        {title}
      </h2>
      {description && (
        <p className="text-slate-400 text-base md:text-lg leading-relaxed">
          {description}
        </p>
      )}
    </div>
  );
}

export default SectionHeader;
