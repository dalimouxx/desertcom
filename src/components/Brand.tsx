type BrandProps = {
  compact?: boolean;
};

export function Brand({ compact = false }: BrandProps) {
  return (
    <span className="brand" aria-label="Desertcom">
      <svg className="brand-mark" viewBox="0 0 44 44" aria-hidden="true">
        <circle cx="29" cy="14" r="7" fill="currentColor" />
        <path d="M3 31.5C11 20 20 20 28 27.5C33 32.2 37 32.6 42 28.5" fill="none" stroke="currentColor" strokeWidth="3.2" strokeLinecap="round" />
        <path d="M4 38C14 29.5 23 30 31 36" fill="none" stroke="currentColor" strokeWidth="3.2" strokeLinecap="round" />
      </svg>
      {!compact && <span className="brand-word">desertcom<span className="brand-registered">®</span></span>}
    </span>
  );
}
