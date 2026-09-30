type FlowDiagramProps = {
  nodes: string[];
  label?: string;
};

/**
 * A small, abstract system diagram — a plain sequence of stages connected
 * by arrows. Intentionally minimal: labelled boxes, one flow direction.
 */
export function FlowDiagram({ nodes, label }: FlowDiagramProps) {
  const boxWidth = 132;
  const boxHeight = 52;
  const gap = 36;
  const totalWidth = nodes.length * boxWidth + (nodes.length - 1) * gap + 32;
  const height = 112;

  return (
    <figure className="w-full">
      <svg
        viewBox={`0 0 ${totalWidth} ${height}`}
        className="h-auto w-full"
        role="img"
        aria-label={label ?? `Diagram: ${nodes.join(" leads to ")}`}
      >
        {nodes.map((node, i) => {
          const x = 16 + i * (boxWidth + gap);
          const y = (height - boxHeight) / 2;
          return (
            <g key={node}>
              <rect
                x={x}
                y={y}
                width={boxWidth}
                height={boxHeight}
                rx="0"
                fill="var(--color-bg)"
                stroke="var(--color-line)"
                strokeWidth="1"
              />
              <text
                x={x + boxWidth / 2}
                y={y + boxHeight / 2}
                textAnchor="middle"
                dominantBaseline="middle"
                fill="var(--color-ink)"
                fontFamily="JetBrains Mono, monospace"
                fontSize="10"
              >
                {node}
              </text>
              {i < nodes.length - 1 && (
                <g>
                  <line
                    x1={x + boxWidth}
                    y1={y + boxHeight / 2}
                    x2={x + boxWidth + gap - 8}
                    y2={y + boxHeight / 2}
                    stroke="var(--color-accent)"
                    strokeWidth="1.3"
                  />
                  <path
                    d={`M ${x + boxWidth + gap - 12} ${y + boxHeight / 2 - 4} L ${
                      x + boxWidth + gap - 6
                    } ${y + boxHeight / 2} L ${x + boxWidth + gap - 12} ${
                      y + boxHeight / 2 + 4
                    }`}
                    stroke="var(--color-accent)"
                    strokeWidth="1.3"
                    fill="none"
                  />
                </g>
              )}
            </g>
          );
        })}
      </svg>
    </figure>
  );
}
