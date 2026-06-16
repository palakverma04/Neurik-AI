import { Badge } from "@/components/ui/badge";
import { SectionWrapper } from "./SectionWrapper";
import {
  Sun,
  Layers,
  ImageIcon,
  AlertTriangle,
  Radio,
  Activity,
} from "lucide-react";

const icons = [Sun, Layers, ImageIcon, AlertTriangle, Radio, Activity];

type ChallengeSectionProps = {
  badge: string;
  title: string;
  description: string;
  factors: readonly string[];
  conclusion: string;
};

export function ChallengeSection({
  badge,
  title,
  description,
  factors,
  conclusion,
}: ChallengeSectionProps) {
  return (
    <SectionWrapper className="bg-foreground/[0.02]">
      <div className="max-w-3xl">
        <Badge variant="secondary">{badge}</Badge>
        <h2 className="mt-4 text-3xl md:text-4xl font-semibold">
          {title}
        </h2>
        <p className="mt-4 text-lg text-muted leading-relaxed">{description}</p>
      </div>

      <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {factors.map((factor, i) => {
          const Icon = icons[i % icons.length];
          return (
            <div
              key={factor}
              className="glass-card flex items-center gap-4 rounded-xl p-5"
            >
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-foreground/5 text-foreground">
                <Icon className="h-5 w-5" />
              </div>
              <span className="text-sm font-medium">{factor}</span>
            </div>
          );
        })}
      </div>

      <p className="mt-10 text-muted leading-relaxed max-w-3xl">{conclusion}</p>
    </SectionWrapper>
  );
}
