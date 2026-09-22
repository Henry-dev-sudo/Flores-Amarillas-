// Este componente dibuja el listón rojo que amarra el ramo.
// Es un SVG (imagen vectorial) armado con formas simples:
// dos curvas para el lazo, dos triángulos para las colas,
// y un óvalo para el nudo central.
export default function Ribbon() {
  return (
    <svg
      className="cinta"
      viewBox="0 0 300 80"
      preserveAspectRatio="none"
      aria-hidden="true"
    >
      {/* Colas del moño, van detrás del nudo */}
      <path d="M138 40 L122 74 L144 66 Z" fill="#b91c1c" />
      <path d="M162 40 L178 74 L156 66 Z" fill="#b91c1c" />

      {/* Lazo izquierdo */}
      <path
        d="M150 38 C110 4 60 8 50 36 C60 60 110 56 150 38 Z"
        fill="#dc2626"
        stroke="#7f1d1d"
        strokeWidth="2"
      />
      {/* Lazo derecho */}
      <path
        d="M150 38 C190 4 240 8 250 36 C240 60 190 56 150 38 Z"
        fill="#dc2626"
        stroke="#7f1d1d"
        strokeWidth="2"
      />

      {/* Nudo del centro */}
      <ellipse cx="150" cy="38" rx="14" ry="11" fill="#ef4444" stroke="#7f1d1d" strokeWidth="2" />
    </svg>
  );
}