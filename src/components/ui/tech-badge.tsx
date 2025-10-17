import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

interface TechBadgeProps {
  name: string;
  icon?: React.ReactNode;
  variant?: "default" | "accent" | "outline";
  className?: string;
  style?: React.CSSProperties;
}

export function TechBadge({ name, icon, variant = "default", className, style }: TechBadgeProps) {
  const badgeVariant = variant === "accent" ? "secondary" : variant === "outline" ? "outline" : "default";
  
  return (
    <Badge
      variant={badgeVariant}
      style={style}
      className={cn(
        "px-4 py-2 text-sm font-medium transition-all duration-300 hover:scale-105 hover:shadow-glow",
        variant === "accent" && "bg-accent text-accent-foreground hover:bg-accent-glow",
        variant === "default" && "bg-primary/10 text-primary hover:bg-primary/20",
        className
      )}
    >
      {icon && <span className="mr-2">{icon}</span>}
      {name}
    </Badge>
  );
}