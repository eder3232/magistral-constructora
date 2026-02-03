"use client";
import { useState } from "react";
import { ShoppingBag, GraduationCap, Heart, Bus, MapPin, Clock } from "lucide-react";

/* ──────── datos de ejemplo ──────── */
const CATS = [
  { id: "todos", label: "Todos", color: "#d4a847" },
  { id: "comercial", label: "Comercial", color: "#d4a847", Icon: ShoppingBag },
  { id: "transporte", label: "Transporte", color: "#5ba3d9", Icon: Bus },
  { id: "educacion", label: "Educación", color: "#9b7fcc", Icon: GraduationCap },
  { id: "salud", label: "Salud", color: "#d97f7f", Icon: Heart },
];
const catOf = Object.fromEntries(CATS.slice(1).map((c) => [c.id, c]));
const rgbOf = {
  comercial: "212,168,71",
  transporte: "91,163,217",
  educacion: "155,127,204",
  salud: "217,127,127",
};

const POIS = [
  { id: 1, name: "Plaza Mayor Shopping", cat: "comercial", dist: "180 m", time: "2 min", x: 30, y: 40 },
  { id: 2, name: "Supermercado La Familia", cat: "comercial", dist: "250 m", time: "3 min", x: 40, y: 64 },
  { id: 3, name: "Centro Comercial Sur", cat: "comercial", dist: "420 m", time: "5 min", x: 72, y: 37 },
  { id: 4, name: "Estación Metro Línea 3", cat: "transporte", dist: "120 m", time: "1 min", x: 58, y: 42 },
  { id: 5, name: "Paradero Bus (Líneas 5, 8)", cat: "transporte", dist: "95 m", time: "1 min", x: 43, y: 57 },
  { id: 6, name: "Colegio San Martín", cat: "educacion", dist: "480 m", time: "6 min", x: 24, y: 24 },
  { id: 7, name: "Universidad Nacional", cat: "educacion", dist: "850 m", time: "11 min", x: 79, y: 22 },
  { id: 8, name: "Clínica Santa Rosa", cat: "salud", dist: "340 m", time: "4 min", x: 65, y: 69 },
  { id: 9, name: "Hospital Centro Médico", cat: "salud", dist: "720 m", time: "9 min", x: 14, y: 58 },
];

/* ──────── componente principal ──────── */
export default function LocationShowcase() {
  const [filter, setFilter] = useState("todos");
  const [hovered, setHovered] = useState(null);

  const list = filter === "todos" ? POIS : POIS.filter((p) => p.cat === filter);
  const hovPoi = hovered != null ? list.find((p) => p.id === hovered) : null;
  const changeFilter = (id) => {
    setFilter(id);
    setHovered(null);
  };

  return (
    <div
      style={{
        background: "linear-gradient(155deg, #0c1520 0%, #152030 50%, #0c1520 100%)",
        minHeight: "100vh",
        color: "#fff",
        fontFamily: "'Georgia', serif",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* ── CSS global ── */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@600;700;800&display=swap');

        @keyframes pulse {
          0%  { transform: translate(-50%,-50%) scale(1);   opacity:.6; }
          100%{ transform: translate(-50%,-50%) scale(2.3); opacity:0;  }
        }
        @keyframes glow {
          0%,100% { box-shadow: 0 0 18px rgba(212,168,71,.4), 0 0 40px rgba(212,168,71,.1); }
          50%     { box-shadow: 0 0 28px rgba(212,168,71,.6), 0 0 56px rgba(212,168,71,.18); }
        }
        @keyframes fadeUp {
          from { opacity:0; transform:translateY(18px); }
          to   { opacity:1; transform:translateY(0);    }
        }
        .poi-card { transition: all .22s cubic-bezier(.4,0,.2,1); }
        .poi-card:hover { background: rgba(212,168,71,.08) !important; }
        .filter-btn { transition: all .2s ease; cursor:pointer; }
        .filter-btn:hover { opacity:.8; }
      `}</style>

      {/* ── orbs atmosféricos de fondo ── */}
      <div style={{ position: "absolute", top: "-120px", right: "-80px", width: 380, height: 380, borderRadius: "50%", background: "radial-gradient(circle, rgba(212,168,71,.07) 0%, transparent 70%)", pointerEvents: "none" }} />
      <div style={{ position: "absolute", bottom: "-60px", left: "-100px", width: 300, height: 300, borderRadius: "50%", background: "radial-gradient(circle, rgba(91,163,217,.05) 0%, transparent 70%)", pointerEvents: "none" }} />
      <div style={{ position: "absolute", top: "40%", left: "20%", width: 200, height: 200, borderRadius: "50%", background: "radial-gradient(circle, rgba(155,127,204,.04) 0%, transparent 70%)", pointerEvents: "none" }} />

      <div style={{ maxWidth: 980, margin: "0 auto", padding: "44px 18px 40px", position: "relative", zIndex: 1 }}>

        {/* ── header ── */}
        <div style={{ textAlign: "center", marginBottom: 30, animation: "fadeUp .6s ease both" }}>
          <span
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 7,
              background: "rgba(212,168,71,.1)",
              border: "1px solid rgba(212,168,71,.28)",
              borderRadius: 24,
              padding: "5px 16px",
              fontSize: 11,
              fontWeight: 700,
              color: "#d4a847",
              textTransform: "uppercase",
              letterSpacing: 2,
              fontFamily: "system-ui, sans-serif",
            }}
          >
            <MapPin size={12} /> Ubicación
          </span>
          <h2
            style={{
              fontFamily: "'Cormorant Garamond', Georgia, serif",
              fontSize: 42,
              fontWeight: 700,
              margin: "14px 0 8px",
              lineHeight: 1.1,
              letterSpacing: "-0.5px",
            }}
          >
            Ubicación{" "}
            <span style={{ color: "#d4a847", fontWeight: 800 }}>Estratégica</span>
          </h2>
          <p style={{ color: "#7a8fa3", fontSize: 15, maxWidth: 490, margin: "0 auto", fontFamily: "system-ui, sans-serif", lineHeight: 1.55 }}>
            Conectado con todo lo que necesitas. A pasos de los mejores centros comerciales y servicios de la ciudad.
          </p>
          <p style={{ color: "#4a5f70", fontSize: 12, marginTop: 8, fontFamily: "system-ui, sans-serif" }}>
            9+ puntos de interés en un radio de 1 km
          </p>
        </div>

        {/* ── filtros de categoría ── */}
        <div style={{ display: "flex", justifyContent: "center", gap: 8, marginBottom: 22, flexWrap: "wrap" }}>
          {CATS.map((c) => {
            const on = filter === c.id;
            const clr = c.id === "todos" ? "#d4a847" : c.color;
            return (
              <button
                key={c.id}
                className="filter-btn"
                onClick={() => changeFilter(c.id)}
                style={{
                  padding: "6px 20px",
                  borderRadius: 20,
                  border: `1px solid ${on ? clr : "#253545"}`,
                  background: on ? `rgba(${rgbOf[c.id] || "212,168,71"},.12)` : "rgba(21,32,48,.4)",
                  color: on ? clr : "#6b7f8e",
                  fontSize: 13,
                  fontWeight: 600,
                  fontFamily: "system-ui, sans-serif",
                }}
              >
                {c.label}
              </button>
            );
          })}
        </div>

        {/* ── mapa + lista ── */}
        <div style={{ display: "grid", gridTemplateColumns: "1.4fr 1fr", gap: 16 }}>

          {/* ── MAP ── */}
          <div
            style={{
              position: "relative",
              background: "#0e1a26",
              borderRadius: 20,
              border: "1px solid #1c2e3e",
              overflow: "hidden",
              height: 456,
            }}
          >
            {/* SVG: calles, bloques urbanos, línea de conexión */}
            <svg
              viewBox="0 0 100 100"
              preserveAspectRatio="none"
              style={{ position: "absolute", inset: 0, width: "100%", height: "100%", pointerEvents: "none" }}
            >
              {/* calles principales */}
              <line x1="0" y1="43" x2="100" y2="44" stroke="#4a90b8" strokeWidth=".4" opacity=".12" />
              <line x1="0" y1="57" x2="100" y2="58" stroke="#4a90b8" strokeWidth=".28" opacity=".09" />
              <line x1="0" y1="71" x2="100" y2="70" stroke="#4a90b8" strokeWidth=".18" opacity=".06" />
              <line x1="29" y1="0" x2="28" y2="100" stroke="#4a90b8" strokeWidth=".4" opacity=".12" />
              <line x1="50" y1="0" x2="51" y2="100" stroke="#4a90b8" strokeWidth=".28" opacity=".09" />
              <line x1="70" y1="0" x2="69" y2="100" stroke="#4a90b8" strokeWidth=".2" opacity=".07" />

              {/* bloques urbanos */}
              <rect x="14" y="30" width="10" height="9" rx="1.2" fill="#162533" opacity=".7" />
              <rect x="54" y="53" width="9" height="11" rx="1.2" fill="#162533" opacity=".6" />
              <rect x="74" y="40" width="6" height="12" rx="1" fill="#162533" opacity=".5" />
              <rect x="34" y="72" width="12" height="6" rx="1.2" fill="#162533" opacity=".6" />
              <rect x="60" y="14" width="9" height="7" rx="1" fill="#162533" opacity=".5" />
              <rect x="17" y="68" width="7" height="9" rx="1" fill="#162533" opacity=".55" />
              <rect x="42" y="28" width="5" height="6" rx="1" fill="#162533" opacity=".4" />
              <rect x="76" y="56" width="8" height="5" rx="1" fill="#162533" opacity=".45" />

              {/* línea punteada al POI hovered */}
              {hovPoi && (
                <>
                  <line
                    x1="50" y1="50"
                    x2={hovPoi.x} y2={hovPoi.y}
                    stroke={catOf[hovPoi.cat].color}
                    strokeWidth=".6"
                    strokeDasharray="2.8,2.2"
                    opacity=".88"
                  />
                  <circle cx={hovPoi.x} cy={hovPoi.y} r=".8" fill={catOf[hovPoi.cat].color} opacity=".7" />
                  <circle cx="50" cy="50" r=".8" fill="#d4a847" opacity=".9" />
                </>
              )}
            </svg>

            {/* anillos de distancia (CSS) */}
            <div style={{ position: "absolute", left: "50%", top: "50%", transform: "translate(-50%,-50%)", pointerEvents: "none" }}>
              {[176, 134, 94, 56].map((s, i) => (
                <div
                  key={i}
                  style={{
                    position: "absolute", left: "50%", top: "50%",
                    transform: "translate(-50%,-50%)",
                    width: s, height: s,
                    borderRadius: "50%",
                    border: `1px solid rgba(212,168,71,${0.045 + i * 0.035})`,
                  }}
                />
              ))}
            </div>

            {/* edificio central */}
            <div style={{ position: "absolute", left: "50%", top: "50%", transform: "translate(-50%,-50%)", zIndex: 20, textAlign: "center", pointerEvents: "none" }}>
              <div
                style={{
                  width: 52, height: 52, borderRadius: "50%",
                  background: "linear-gradient(140deg, #d4a847, #e8c36a)",
                  border: "3px solid #0e1a26",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  margin: "0 auto",
                  animation: "glow 2.8s ease-in-out infinite",
                }}
              >
                <span style={{ fontSize: 23 }}>🏢</span>
              </div>
              <div
                style={{
                  marginTop: 8,
                  background: "rgba(12,21,32,.93)",
                  border: "1px solid rgba(212,168,71,.5)",
                  borderRadius: 9,
                  padding: "3px 10px",
                  fontSize: 9.5,
                  fontWeight: 800,
                  color: "#d4a847",
                  whiteSpace: "nowrap",
                  letterSpacing: 1.2,
                  fontFamily: "system-ui, sans-serif",
                  textTransform: "uppercase",
                }}
              >
                ● Su nuevo hogar
              </div>
            </div>

            {/* marcadores POI */}
            {list.map((poi) => {
              const { color, Icon } = catOf[poi.cat];
              const on = hovered === poi.id;
              return (
                <div
                  key={poi.id}
                  onMouseEnter={() => setHovered(poi.id)}
                  onMouseLeave={() => setHovered(null)}
                  style={{
                    position: "absolute",
                    left: `${poi.x}%`, top: `${poi.y}%`,
                    transform: "translate(-50%,-50%)",
                    zIndex: on ? 15 : 5,
                    cursor: "pointer",
                  }}
                >
                  {/* ripple */}
                  {on && (
                    <div style={{
                      position: "absolute", left: "50%", top: "50%",
                      width: 48, height: 48, borderRadius: "50%",
                      border: `2px solid ${color}`,
                      animation: "pulse 1.3s ease-out infinite",
                    }} />
                  )}
                  {/* ícono */}
                  <div
                    style={{
                      width: on ? 37 : 32, height: on ? 37 : 32,
                      borderRadius: "50%",
                      background: color,
                      border: "3px solid #0e1a26",
                      display: "flex", alignItems: "center", justifyContent: "center",
                      boxShadow: on ? `0 0 16px ${color}88` : "0 2px 10px rgba(0,0,0,.45)",
                      transition: "all .2s cubic-bezier(.4,0,.2,1)",
                      position: "relative",
                    }}
                  >
                    <Icon size={on ? 16 : 14} color="#fff" />
                  </div>
                  {/* tooltip */}
                  {on && (
                    <div style={{
                      position: "absolute", bottom: "calc(100% + 11px)", left: "50%",
                      transform: "translateX(-50%)",
                      background: "#0c1520",
                      border: `1px solid ${color}`,
                      borderRadius: 11,
                      padding: "8px 14px",
                      whiteSpace: "nowrap",
                      pointerEvents: "none",
                      boxShadow: "0 6px 24px rgba(0,0,0,.5)",
                      zIndex: 30,
                    }}>
                      <div style={{ fontSize: 13, fontWeight: 700, fontFamily: "system-ui, sans-serif" }}>{poi.name}</div>
                      <div style={{ fontSize: 11, color: "#6b7f8e", marginTop: 3, fontFamily: "system-ui, sans-serif", display: "flex", alignItems: "center", gap: 6 }}>
                        <span style={{ color, fontWeight: 600 }}>{poi.dist}</span>
                        <span style={{ color: "#3a4f5e" }}>·</span>
                        <Clock size={10} color="#3a4f5e" />
                        <span>{poi.time} caminando</span>
                      </div>
                      {/* flecha */}
                      <div style={{
                        position: "absolute", top: "100%", left: "50%",
                        transform: "translateX(-50%)",
                        borderLeft: "6px solid transparent",
                        borderRight: "6px solid transparent",
                        borderTop: `6px solid ${color}`,
                      }} />
                    </div>
                  )}
                </div>
              );
            })}

            {/* leyenda */}
            <div style={{ position: "absolute", bottom: 14, left: 14, display: "flex", gap: 8, flexWrap: "wrap" }}>
              {CATS.slice(1).map((c) => (
                <div key={c.id} style={{ display: "flex", alignItems: "center", gap: 5, background: "rgba(12,21,32,.88)", border: "1px solid rgba(255,255,255,.06)", padding: "4px 9px", borderRadius: 7 }}>
                  <div style={{ width: 8, height: 8, borderRadius: "50%", background: c.color }} />
                  <span style={{ fontSize: 10, color: "#8a9fad", fontFamily: "system-ui, sans-serif" }}>{c.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* ── LISTA de POIs ── */}
          <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
            {list.map((poi, idx) => {
              const { color, Icon } = catOf[poi.cat];
              const on = hovered === poi.id;
              return (
                <div
                  key={poi.id}
                  className="poi-card"
                  onMouseEnter={() => setHovered(poi.id)}
                  onMouseLeave={() => setHovered(null)}
                  style={{
                    background: on ? `rgba(${rgbOf[poi.cat]},.09)` : "rgba(21,32,48,.55)",
                    border: `1px solid ${on ? color + "55" : "#1c2e3e"}`,
                    borderRadius: 13,
                    padding: "13px 15px",
                    display: "flex", alignItems: "center", gap: 13,
                    cursor: "pointer",
                    transform: on ? "translateX(5px)" : "none",
                    animation: `fadeUp .4s ease ${idx * 0.06}s both`,
                  }}
                >
                  <div style={{
                    width: 40, height: 40, borderRadius: 11,
                    background: `rgba(${rgbOf[poi.cat]},.14)`,
                    border: `1px solid rgba(${rgbOf[poi.cat]},.2)`,
                    display: "flex", alignItems: "center", justifyContent: "center",
                    flexShrink: 0,
                  }}>
                    <Icon size={18} color={color} />
                  </div>
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <div style={{ fontSize: 13.5, fontWeight: 600, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap", fontFamily: "system-ui, sans-serif" }}>
                      {poi.name}
                    </div>
                    <div style={{ fontSize: 11.5, color: "#5a7080", marginTop: 3, fontFamily: "system-ui, sans-serif", display: "flex", alignItems: "center", gap: 5 }}>
                      <span style={{ color, fontWeight: 600 }}>{poi.dist}</span>
                      <span style={{ color: "#3a4f5e" }}>·</span>
                      <Clock size={10} color="#3a4f5e" />
                      <span>{poi.time}</span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* ── stats ── */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 12, marginTop: 20 }}>
          {[
            { emoji: "🚶", label: "Caminable", value: "9 / 10", sub: "Score de accesibilidad" },
            { emoji: "🚌", label: "Transporte", value: "Excelente", sub: "Metro a 120 m" },
            { emoji: "🛍️", label: "Comercial", value: "3 centros", sub: "A menos de 500 m" },
            { emoji: "📍", label: "Ubicación", value: "Premium", sub: "Zona de alta demanda" },
          ].map((s, i) => (
            <div
              key={i}
              style={{
                background: "rgba(21,32,48,.5)",
                border: "1px solid #1c2e3e",
                borderRadius: 15,
                padding: "18px 10px",
                textAlign: "center",
                animation: `fadeUp .5s ease ${0.25 + i * 0.08}s both`,
              }}
            >
              <div style={{ fontSize: 22, marginBottom: 5 }}>{s.emoji}</div>
              <div style={{ fontSize: 9.5, color: "#4a5f70", textTransform: "uppercase", letterSpacing: 1.3, fontWeight: 700, fontFamily: "system-ui, sans-serif" }}>{s.label}</div>
              <div style={{ fontSize: 18, fontWeight: 800, color: "#d4a847", margin: "4px 0 3px", fontFamily: "system-ui, sans-serif" }}>{s.value}</div>
              <div style={{ fontSize: 10, color: "#3a4f5e", fontFamily: "system-ui, sans-serif" }}>{s.sub}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
