import { HeroSection } from "./HeroSection";
import { ValuePropositionSection } from "./ValuePropositionSection";
import { CapabilitiesGrid } from "./CapabilitiesGrid";
import { OutcomesGrid } from "./OutcomesGrid";
import { FeatureSections } from "./FeatureSections";
import { DualViewSplit } from "./DualViewSplit";
import { WorkflowSteps } from "./WorkflowSteps";
import { ProductShowcaseVideo } from "./ProductShowcaseVideo";
import { RelatedProducts } from "./RelatedProducts";
import { FinalCTA } from "./FinalCTA";
import { SectionWrapper } from "./SectionWrapper";
import type { Product } from "@/lib/content/products";
import { getStartedCta } from "@/lib/content/navigation";

type ProductPageTemplateProps = {
  product: Product;
};

export function ProductPageTemplate({ product }: ProductPageTemplateProps) {
  const hasFeatureCapabilities = product.features?.some((f) => f.capabilities);

  return (
    <>
      <HeroSection
        badge={product.name}
        title={product.name}
        subtitle={product.tagline}
        secondarySubtitle={product.subtitle}
        description={product.description}
        extendedDescription={product.extendedDescription}
        ctas={[
          { label: getStartedCta.label, href: getStartedCta.href, variant: "default" },
        ]}
        compact
      />

      {product.showcaseVideo && (
        <ProductShowcaseVideo src={product.showcaseVideo} />
      )}

      {product.valueProposition && (
        <ValuePropositionSection valueProposition={product.valueProposition} />
      )}

      {product.supportedPlatforms && (
        <SectionWrapper className="py-12">
          <h2 className="text-2xl font-bold mb-6">Supported Platforms</h2>
          <div className="flex flex-wrap gap-4">
            {product.supportedPlatforms.map((platform) => (
              <div
                key={platform}
                className="glass-card rounded-lg px-6 py-3 text-sm font-semibold text-accent"
              >
                {platform}
              </div>
            ))}
          </div>
        </SectionWrapper>
      )}

      {product.features && product.features.length > 0 && hasFeatureCapabilities && (
        <FeatureSections features={product.features} />
      )}

      {product.capabilities && product.capabilities.length > 0 && (
        <CapabilitiesGrid title="Capabilities" items={product.capabilities} />
      )}

      {product.outcomes && product.outcomes.length > 0 && (
        <OutcomesGrid title="Outcomes" items={product.outcomes} />
      )}

      {product.features &&
        product.features.length > 0 &&
        !hasFeatureCapabilities && (
          <FeatureSections features={product.features} />
        )}

      {product.views && product.views.length > 0 && (
        <DualViewSplit views={product.views} />
      )}

      {product.workflow && product.workflow.length > 0 && (
        <WorkflowSteps
          title={product.workflowTitle ?? "Workflow"}
          description={product.workflowDescription}
          steps={product.workflow}
        />
      )}

      {product.supportedEnvironments && (
        <SectionWrapper className="py-16">
          <h2 className="text-2xl font-bold mb-6">Supported Environments</h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {product.supportedEnvironments.map((env) => (
              <div
                key={env}
                className="glass-card rounded-lg p-4 text-center text-sm font-medium"
              >
                {env}
              </div>
            ))}
          </div>
        </SectionWrapper>
      )}

      {product.benefits &&
        product.benefits.length > 0 &&
        !product.features?.some((f) => f.benefits) && (
          <OutcomesGrid title="Benefits" items={product.benefits} />
        )}

      {product.relatedProducts && product.relatedProducts.length > 0 && (
        <RelatedProducts slugs={product.relatedProducts} />
      )}

      <FinalCTA />
    </>
  );
}
