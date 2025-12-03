import { Badge } from "@/components/ui/badge"
import { Briefcase, Euro, Users } from "lucide-react"

export default function VehicleCard({ vehicle, isCenter }) {
    return (
        <div className={`w-60 transition-all duration-500 ${isCenter ? "" : ""}`}>
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300 h-full">
                <div className="relative h-30 bg-gradient-to-br from-secondary/10 to-white flex items-center justify-center overflow-hidden">
                    <img src={vehicle.image_path || "/placeholder.svg"} alt={vehicle.name_category} className="w-[80%] h-max " />
                </div>

                <div className="p-6">
                    <h3 className="text-2xl font-bold text-foreground mb-2">{vehicle.name_category}</h3>

                    <div className="flex items-center justify-between">
                        <div className="flex items-center gap-1">
                            <Users className="w-4 h-4 text-gray-400" />
                            <span className="text-sm text-gray-600">{vehicle.num_seats}</span>
                            <Briefcase className="w-4 h-4 text-gray-400 ml-1" />
                            <span className="text-sm text-gray-600">{vehicle.max_luggages}</span>
                        </div>
                        <div className="text-right flex items-center justify-center">
                            <span className="text-sm text-gray-400">From</span>
                            <div
                                className={`flex items-center justify-center ml-1 text-sm font-bold bg-gradient-to-r bg-clip-text text-black/50`}
                            >
                                <Euro size={13} strokeWidth={2.5} className="mt-[2px]" /> {vehicle.base_fare}
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}
