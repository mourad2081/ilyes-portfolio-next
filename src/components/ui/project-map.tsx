"use client";

import { useEffect, useRef } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

interface ProjectMapProps {
  center: [number, number];
  zoom: number;
  isDark?: boolean;
}

export function ProjectMap({ center, zoom, isDark = true }: ProjectMapProps) {
  const mapRef = useRef<HTMLDivElement>(null);
  const mapInstanceRef = useRef<L.Map | null>(null);

  useEffect(() => {
    if (!mapRef.current || mapInstanceRef.current) return;

    const map = L.map(mapRef.current, {
      center,
      zoom,
      zoomControl: false,
      attributionControl: false,
      scrollWheelZoom: false,
    });

    L.tileLayer(
      "https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png",
      { maxZoom: 19 }
    ).addTo(map);

    L.circleMarker(center, {
      radius: 10,
      fillColor: "#06b6d4",
      color: "#fff",
      weight: 2,
      fillOpacity: 0.8,
    })
      .addTo(map)
      .bindPopup("Project Site");

    L.circle(center, {
      radius: 2500,
      color: "#06b6d4",
      fillOpacity: 0.1,
      weight: 1,
    }).addTo(map);

    mapInstanceRef.current = map;

    return () => {
      map.remove();
      mapInstanceRef.current = null;
    };
  }, [center, zoom]);

  return (
    <div
      ref={mapRef}
      className="w-full h-full rounded-xl"
      style={{ zIndex: 10 }}
    />
  );
}
