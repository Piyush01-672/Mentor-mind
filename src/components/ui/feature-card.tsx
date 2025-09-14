import { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface FeatureCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  image?: string;
  className?: string;
}

const FeatureCard = ({ title, description, icon: Icon, image, className }: FeatureCardProps) => {
  return (
    <div className={cn("card-feature group cursor-pointer", className)}>
      <div className="flex flex-col items-center text-center space-y-4">
        {image ? (
          <div className="w-16 h-16 flex items-center justify-center">
            <img src={image} alt={title} className="w-full h-full object-contain" />
          </div>
        ) : (
          <div className="w-16 h-16 bg-gradient-primary rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
            <Icon className="w-8 h-8 text-white" />
          </div>
        )}
        
        <div className="space-y-2">
          <h3 className="text-xl font-semibold text-foreground">{title}</h3>
          <p className="text-muted-foreground leading-relaxed">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default FeatureCard;