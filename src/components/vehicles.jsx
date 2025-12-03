"use client"

import { useState, useEffect } from "react"
import VehicleCard from "./vehicle-card"

export default function VehicleCarousel() {
  const [vehicles, setVehicles] = useState([{}]);
  const [offset, setOffset] = useState(0)

  useEffect(() => {
    const speed = window.innerWidth > 700 ? 4 : 6;
    const animationFrame = setInterval(() => {
      setOffset((prev) => (prev - speed) % (vehicles.length * 3000))
    }, 30)

    return () => clearInterval(animationFrame)
  }, [])

  useEffect(() => {
    const fetchData = async () => {
        
            try {
                const response = await fetch(`/api/get_fleets`, {
                    method: 'GET',
                    headers: { 'Content-Type': 'application/json' },
                })
                
                if (response.status === 200) {
                    const data = await response.json();
                    console.log(data)
                    setVehicles(data);
                }
            } catch (error) {
                console.error('Fetch error:', error);
            }
    }
    fetchData();
  }, [])

  return (
    <div
      className="w-full flex flex-col  md:w-[85%] items-center "
      
    >
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-foreground mb-3">Our Vehicle Fleet</h2>
        <p className="text-lg text-muted-foreground">Endless selection of premium vehicles</p>
      </div>

      <div className="w-full overflow-hidden">
        <div
          className="flex gap-6 px-6 pt-10 pb-15"
          style={{
            transform: `translateX(${offset}px)`,
            transition: "transform 0.3s linear",
          }}
        >
          {/* Render vehicles twice for seamless loop */}
          {[...vehicles, ...vehicles, ...vehicles].map((vehicle, index) => (
            <div
              key={`${vehicle.id}-${Math.floor(index / vehicles.length)}`}
              className="flex-shrink-0"
              style={{
                width: "240px",
              }}
            >
              <VehicleCard vehicle={vehicle} isCenter={false} />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
