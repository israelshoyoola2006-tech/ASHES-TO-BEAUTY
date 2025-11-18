import { Card, CardContent } from "@/components/ui/card";
import { LucideIcon } from "lucide-react";

interface ProgramCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  image?: string;
}

const ProgramCard = ({ title, description, icon: Icon, image }: ProgramCardProps) => {
  return (
    <Card className="group overflow-hidden hover:shadow-lg transition-all duration-300 border-2 hover:border-primary">
      {image && (
        <div className="aspect-video overflow-hidden">
          <img 
            src={image} 
            alt={title}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
          />
        </div>
      )}
      <CardContent className="p-6">
        <div className="flex items-center gap-3 mb-3">
          <div className="p-3 rounded-full bg-gradient-to-br from-accent to-secondary">
            <Icon className="h-6 w-6 text-accent-foreground" />
          </div>
          <h3 className="text-xl font-bold text-primary">{title}</h3>
        </div>
        <p className="text-muted-foreground">{description}</p>
      </CardContent>
    </Card>
  );
};

export default ProgramCard;
