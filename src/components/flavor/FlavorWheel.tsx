'use client';

import React, { useEffect, useRef, useState, useCallback } from 'react';
import * as d3 from 'd3';
import { flavorWheelData, FlavorNote, getCoffeesWithFlavor } from '@/lib/data/flavorWheel';
import { Coffee } from '@/lib/types/coffee';
import styles from './FlavorWheel.module.scss';

interface FlavorWheelProps {
  coffees: Coffee[];
  onFlavorSelect?: (flavor: FlavorNote, relatedCoffees: Coffee[]) => void;
  className?: string;
}

interface FlavorData extends FlavorNote {
  relatedCoffees: Coffee[];
  categoryColor: string;
  categoryName: string;
}

export const FlavorWheel: React.FC<FlavorWheelProps> = ({ 
  coffees, 
  onFlavorSelect,
  className = '' 
}) => {
  const svgRef = useRef<SVGSVGElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [selectedFlavor, setSelectedFlavor] = useState<FlavorData | null>(null);
  const [hoveredFlavor, setHoveredFlavor] = useState<FlavorData | null>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isAnimating, setIsAnimating] = useState(false);

  // Prepare flavor data with coffee connections
  const flavorData: FlavorData[] = flavorWheelData.categories.flatMap(category =>
    category.subFlavors.map(flavor => ({
      ...flavor,
      relatedCoffees: getCoffeesWithFlavor(flavor.id, coffees),
      categoryColor: category.color,
      categoryName: category.name
    }))
  );

  const handleFlavorClick = useCallback((flavor: FlavorData) => {
    setIsAnimating(true);
    setSelectedFlavor(selectedFlavor?.id === flavor.id ? null : flavor);
    onFlavorSelect?.(flavor, flavor.relatedCoffees);
    
    // Haptic feedback
    if ('vibrate' in navigator) {
      navigator.vibrate([30, 10, 30]);
    }
    
    setTimeout(() => setIsAnimating(false), 300);
  }, [onFlavorSelect, selectedFlavor]);

  const handleFlavorHover = useCallback((flavor: FlavorData | null, event?: MouseEvent) => {
    setHoveredFlavor(flavor);
    if (event && containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect();
      setMousePosition({
        x: event.clientX - rect.left,
        y: event.clientY - rect.top
      });
    }
  }, []);

  useEffect(() => {
    if (!svgRef.current) return;

    const svg = d3.select(svgRef.current);
    svg.selectAll("*").remove();

    const size = 800;
    const center = size / 2;
    const radius = 350;

    svg.attr('width', size).attr('height', size);

    // Beautiful pastel palette with some darker accent tones
    const pastelWithDarkAccents = [
      '#FFB3BA', // Soft Pink
      '#FFDFBA', // Peach
      '#FFFFBA', // Light Yellow
      '#BAFFC9', // Mint Green
      '#BAE1FF', // Sky Blue
      '#E1BAFF', // Lavender
      '#8B4513', // Coffee Brown (dark accent)
      '#C9FFBA', // Light Green
      '#FFCBA4', // Coral
      '#D4BAFF', // Light Purple
      '#2F4F4F', // Dark Slate (dark accent)
      '#FFE1BA', // Cream
      '#B8860B', // Dark Gold (dark accent)
      '#FFB6C1', // Light Pink
      '#E0FFFF', // Light Cyan
      '#F0E68C', // Khaki
      '#DDA0DD', // Plum
      '#98FB98', // Pale Green
      '#F5DEB3', // Wheat
      '#D3D3D3'  // Light Gray
    ];

    // Create main container
    const container = svg.append('g')
      .attr('transform', `translate(${center}, ${center})`);

    // Create pie layout
    const pie = d3.pie<FlavorData>()
      .value(() => 1) // Equal segments for clean look
      .sort(null)
      .padAngle(0.02);

    const arc = d3.arc<d3.PieArcDatum<FlavorData>>()
      .innerRadius(120)
      .outerRadius(radius)
      .cornerRadius(12);

    const hoverArc = d3.arc<d3.PieArcDatum<FlavorData>>()
      .innerRadius(110)
      .outerRadius(radius + 25)
      .cornerRadius(15);

    const pieData = pie(flavorData);

    // Create segments with modern styling
    const segments = container.selectAll('.flavor-segment')
      .data(pieData)
      .enter()
      .append('g')
      .attr('class', 'flavor-segment');

    // Add paths with beautiful pastel colors and dark accents
    segments.append('path')
      .attr('d', arc)
      .attr('fill', (d, i) => pastelWithDarkAccents[i % pastelWithDarkAccents.length])
      .attr('stroke', '#ffffff')
      .attr('stroke-width', 3)
      .style('cursor', 'pointer')
      .style('filter', 'drop-shadow(0 2px 8px rgba(0,0,0,0.1))')
      .style('transition', 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1))')
      .style('opacity', 0.9)
      .on('mouseenter', function(event, d) {
        d3.select(this)
          .transition()
          .duration(200)
          .attr('d', hoverArc(d) || '')
          .style('filter', 'drop-shadow(0 6px 20px rgba(0,0,0,0.3)) brightness(1.2)')
          .style('opacity', 1);
        
        handleFlavorHover(d.data, event as MouseEvent);
      })
      .on('mouseleave', function(event, d) {
        if (selectedFlavor?.id !== d.data.id) {
          d3.select(this)
            .transition()
            .duration(200)
            .attr('d', arc(d) || '')
            .style('filter', 'drop-shadow(0 3px 12px rgba(0,0,0,0.2))')
            .style('opacity', 0.9);
        }
        handleFlavorHover(null);
      })
      .on('click', function(event, d) {
        handleFlavorClick(d.data);
        
        // Modern selection animation with rich colors
        segments.selectAll('path')
          .transition()
          .duration(300)
          .attr('d', function(this: any, segmentData: any) {
            return selectedFlavor?.id === segmentData.data.id ? hoverArc(segmentData) || '' : arc(segmentData) || '';
          })
          .style('filter', function(this: any, segmentData: any) {
            return selectedFlavor?.id === segmentData.data.id 
              ? 'drop-shadow(0 8px 25px rgba(0,0,0,0.4)) brightness(1.3)' 
              : 'drop-shadow(0 3px 12px rgba(0,0,0,0.2))';
          })
          .style('opacity', function(this: any, segmentData: any) {
            return selectedFlavor?.id === segmentData.data.id ? 1 : 0.9;
          });
      });

    // Add elegant labels
    segments.append('text')
      .attr('transform', d => {
        const [x, y] = arc.centroid(d);
        return `translate(${x * 1.15}, ${y * 1.15})`;
      })
      .attr('text-anchor', 'middle')
      .attr('font-size', '14px')
      .attr('font-weight', '600')
      .attr('fill', '#1e293b')
      .style('pointer-events', 'none')
      .style('text-shadow', '0 1px 2px rgba(255, 255, 255, 0.8)')
      .text(d => d.data.name);

    // Add coffee count indicators
    segments.append('circle')
      .attr('cx', d => {
        const [x] = arc.centroid(d);
        return x * 0.7;
      })
      .attr('cy', d => {
        const [, y] = arc.centroid(d);
        return y * 0.7;
      })
      .attr('r', d => Math.min(12, 4 + d.data.relatedCoffees.length))
      .attr('fill', 'rgba(255, 255, 255, 0.9)')
      .attr('stroke', '#374151')
      .attr('stroke-width', 2)
      .style('pointer-events', 'none');

    // Add coffee count text
    segments.append('text')
      .attr('x', d => {
        const [x] = arc.centroid(d);
        return x * 0.7;
      })
      .attr('y', d => {
        const [, y] = arc.centroid(d);
        return y * 0.7;
      })
      .attr('text-anchor', 'middle')
      .attr('dominant-baseline', 'middle')
      .attr('font-size', '10px')
      .attr('font-weight', 'bold')
      .attr('fill', '#374151')
      .style('pointer-events', 'none')
      .text(d => d.data.relatedCoffees.length);

    // Elegant center design
    container.append('circle')
      .attr('r', 118)
      .attr('fill', 'rgba(255, 255, 255, 0.98)')
      .attr('stroke', 'rgba(0, 0, 0, 0.05)')
      .attr('stroke-width', 1)
      .style('filter', 'drop-shadow(0 8px 32px rgba(0,0,0,0.08))');

    // Center text with Apple-like typography
    container.append('text')
      .attr('text-anchor', 'middle')
      .attr('font-size', '24px')
      .attr('font-weight', '700')
      .attr('fill', '#1e293b')
      .attr('y', -10)
      .style('letter-spacing', '-0.02em')
      .text('COFFEE FLAVORS');

    container.append('text')
      .attr('text-anchor', 'middle')
      .attr('font-size', '14px')
      .attr('font-weight', '500')
      .attr('fill', '#64748b')
      .attr('y', 15)
      .text(`${flavorData.length} unique profiles`);

  }, [flavorData, handleFlavorClick, handleFlavorHover, selectedFlavor]);

  return (
    <div className={`${styles.flavorWheel} ${className}`} ref={containerRef}>
      {/* Header */}
      <div className={styles.header}>
        <h2 className={styles.title}>Interactive Coffee Flavor Wheel</h2>
        <p className={styles.subtitle}>Explore flavor profiles and discover new coffees</p>
      </div>

      {/* Main Wheel Container */}
      <div className={styles.wheelContainer}>
        <svg ref={svgRef} className={styles.wheel} />
        
        {/* Floating Tooltip */}
        {hoveredFlavor && (
          <div 
            className={styles.tooltip}
            style={{
              left: mousePosition.x,
              top: mousePosition.y - 60,
              transform: 'translateX(-50%)'
            }}
          >
            <div className={styles.tooltipContent}>
              <span className={styles.tooltipName}>{hoveredFlavor.name}</span>
              <span className={styles.tooltipCount}>{hoveredFlavor.relatedCoffees.length} coffees</span>
            </div>
          </div>
        )}
      </div>

      {/* Minimal Flavor Details */}
      {selectedFlavor && (
        <div className={`${styles.flavorPanel} ${isAnimating ? styles.animating : ''}`}>
          <div className={styles.panelHeader}>
            <h3 className={styles.flavorName}>{selectedFlavor.name}</h3>
            <button 
              className={styles.closeButton}
              onClick={() => setSelectedFlavor(null)}
              aria-label="Close"
            >
              ×
            </button>
          </div>
          
          <p className={styles.flavorDescription}>{selectedFlavor.description}</p>
          
          <div className={styles.flavorMeta}>
            <div className={styles.metaItem}>
              <span className={styles.metaLabel}>Intensity</span>
              <div className={styles.intensityDots}>
                {[1, 2, 3, 4, 5].map(level => (
                  <div
                    key={level}
                    className={`${styles.dot} ${level <= selectedFlavor.intensity ? styles.active : ''}`}
                  />
                ))}
              </div>
            </div>
            
            <div className={styles.metaItem}>
              <span className={styles.metaLabel}>Coffees</span>
              <span className={styles.metaValue}>{selectedFlavor.relatedCoffees.length}</span>
            </div>
          </div>

          {selectedFlavor.commonIn.length > 0 && (
            <div className={styles.regions}>
              <span className={styles.metaLabel}>Regions</span>
              <div className={styles.regionList}>
                {selectedFlavor.commonIn.slice(0, 3).map(region => (
                  <span key={region} className={styles.region}>
                    {region}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};