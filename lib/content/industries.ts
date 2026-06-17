export type IndustryDetail = {
  title: string;
  description: string;
};

export type IndustryShowcaseImage = {
  src: string;
  alt: string;
  label: string;
};

export type IndustryShowcase = {
  title: string;
  description: string;
  images: IndustryShowcaseImage[];
};

export type Industry = {
  slug: string;
  name: string;
  description: string;
  pills: string[];
  showcase?: IndustryShowcase;
  details: IndustryDetail[];
  relatedProducts: string[];
};

export const industries: Record<string, Industry> = {
  fashion: {
    slug: "fashion",
    name: "Fashion",
    description:
      "Generate top-down fulfillment box scenes for apparel and accessories — poly-bagged garments in varied layouts, materials, and SKU configurations for inspection and handling models.",
    pills: [
      "Poly-bagged apparel",
      "Box layouts",
      "Material variation",
      "RGB renders",
    ],
    showcase: {
      title: "Fulfillment box inspection scenes",
      description:
        "Simulate how fashion inventory actually ships — folded garments and bagged accessories in cardboard boxes, wrapped in clear poly with wrinkles and reflections. Vary product type and packing layout from jumbled stacks to organized grids.",
      images: [
        {
          src: "/platform/fashion1.png",
          alt: "Top-down view of camouflage trousers in clear poly bags, jumbled in a cardboard shipping box on a warehouse floor",
          label: "RGB · jumbled poly-bagged trousers",
        },
        {
          src: "/platform/fashion2.png",
          alt: "Top-down view of monogram denim handbags in clear poly bags, arranged in a 2×2 grid inside a cardboard box",
          label: "RGB · organized handbag grid layout",
        },
      ],
    },
    details: [
      {
        title: "Mixed packing layouts",
        description:
          "Generate jumbled folded stacks or organized grid arrangements inside the same cardboard box — matching real fulfillment and returns handling.",
      },
      {
        title: "Poly-bag optics",
        description:
          "Clear plastic wrapping with wrinkles, folds, and specular highlights — the surface conditions that make apparel vision hard in production.",
      },
      {
        title: "Product variation",
        description:
          "Switch apparel types, patterns, and SKUs — from folded trousers to bagged handbags — without rebuilding the box or camera rig.",
      },
      {
        title: "Training-ready labels",
        description:
          "Export segmentation, depth, bounding boxes, and COCO-format annotations for pick, count, and inspect workflows.",
      },
    ],
    relatedProducts: ["forge", "sentinel", "axion"],
  },
  electronics: {
    slug: "electronics",
    name: "Electronics",
    description:
      "Generate top-down dark-field inspection scenes of precision machined metal components — CAD-accurate geometry, brushed surfaces, and controlled specular lighting.",
    pills: [
      "CAD input",
      "Brushed metal",
      "Batch grids",
      "Dark-field RGB",
    ],
    showcase: {
      title: "Dark-field part inspection",
      description:
        "Top-down renders of identical machined lever components on a black background — brushed aluminum grain, circular pivot mounts, paired mounting holes, and hard directional lighting with deep shadow separation between parts.",
      images: [
        {
          src: "/platform/electronics1.png",
          alt: "Top-down dark-field view of brushed aluminum lever components with circular mounts and paired holes, arranged in a repeating inspection grid",
          label: "RGB · machined lever batch grid",
        },
      ],
    },
    details: [
      {
        title: "CAD-to-scene",
        description:
          "Import CAD geometry or dimensional specs — hole placement, rounded ends, and pivot mounts rendered with physically accurate proportions.",
      },
      {
        title: "Brushed metal optics",
        description:
          "Directional lighting across brushed aluminum surfaces with specular highlights and shadow falloff on a true black inspection field.",
      },
      {
        title: "Batch grid layouts",
        description:
          "Repeat identical components in controlled vertical grids with consistent spacing for high-throughput inspection training.",
      },
      {
        title: "Defect injection",
        description:
          "Add dents, surface scratches, and part-level corner cases while keeping the same camera angle and lighting rig.",
      },
    ],
    relatedProducts: ["forge", "sentinel", "axion"],
  },
  food: {
    slug: "food",
    name: "Food",
    description:
      "Generate top-down crate scenes of individually wrapped retail food packages — biscuit sachets and chip bags in mixed orientations, with aligned RGB and depth exports for inspection and bin-picking models.",
    pills: [
      "Mixed orientations",
      "SKU variation",
      "Ventilated crates",
      "RGB + depth",
    ],
    showcase: {
      title: "Retail packaging in ventilated crates",
      description:
        "Simulate the way packaged goods actually arrive in logistics — piled in perforated plastic crates with labels facing up, sideways, or flipped to show barcodes and nutrition panels. Switch SKUs within the same crate geometry, then export matching RGB and depth from one scene.",
      images: [
        {
          src: "/platform/food1.png",
          alt: "Top-down view of blue PAR-VIDA Marie biscuit sachets piled in a light blue ventilated plastic crate, with some packages showing front labels and others flipped to reveal barcode panels",
          label: "RGB · biscuit sachets, mixed orientations",
        },
        {
          src: "/platform/food2.png",
          alt: "Grayscale depth map of individually wrapped pillow-pack items in a perforated crate, showing package silhouettes and pile structure on a white background",
          label: "Depth map · pillow-pack geometry",
        },
        {
          src: "/platform/food3.png",
          alt: "Top-down view of orange Toprika chip bags in a light blue ventilated crate, with Cyrillic branding and a mix of front artwork and white back panels",
          label: "RGB · chip bags, SKU variation",
        },
        {
          src: "/platform/food4.png",
          alt: "Grayscale depth map of flexible snack pouches stacked in a ventilated crate, with darker values on top surfaces and lighter values on lower layers",
          label: "Depth map · occlusion & pick points",
        },
      ],
    },
    details: [
      {
        title: "Mixed orientations",
        description:
          "Place packages face-up with brand artwork visible, sideways, or flipped to expose barcode and nutrition panels — the same overlap patterns vision systems see at pick stations.",
      },
      {
        title: "SKU and label variation",
        description:
          "Swap product lines within one crate setup — from blue PAR-VIDA biscuit sachets to orange Toprika chip bags — without rebuilding the container, floor, or camera rig.",
      },
      {
        title: "Crate fill and density",
        description:
          "Control how many units sit in the ventilated crate and how they stack, from loose partial fills to tightly overlapping piles.",
      },
      {
        title: "Aligned depth exports",
        description:
          "Generate depth maps from the same scene to train pick-point estimation, height reasoning, and occlusion handling on flexible pillow-pack geometry.",
      },
    ],
    relatedProducts: ["forge", "sentinel", "axion"],
  },
  "machine-tending": {
    slug: "machine-tending",
    name: "Machine tending",
    description:
      "Generate simulation-ready bin picking scenes for machine tending — identical parts in random orientations, physically accurate materials, and multi-modal training outputs for pick-and-place robots.",
    pills: ["Bin picking", "Part orientations", "Isaac Sim", "Multi-modal labels"],
    showcase: {
      title: "From bin scene to training data",
      description:
        "Control part geometry, bin density, lighting, and camera setup in Isaac Sim — then export aligned RGB, normal, and depth modalities from the same scene for VLA and manipulation model training.",
      images: [
        {
          src: "/platform/machine_tending1.png",
          alt: "Top-down RGB render of a bin densely packed with cross-shaped industrial fittings in random orientations",
          label: "RGB · dense bin layout",
        },
        {
          src: "/platform/machine_tending2.png",
          alt: "Top-down RGB render of a bin with fewer parts and varied lighting for machine tending training",
          label: "RGB · sparse layout & lighting",
        },
        {
          src: "/platform/machine_tending3.png",
          alt: "Normal map visualization of industrial fittings in a machine tending bin",
          label: "Normal map · surface geometry",
        },
        {
          src: "/platform/machine_tending4.png",
          alt: "Depth map of industrial fittings arranged in a machine tending feed bin",
          label: "Depth map · pick-point geometry",
        },
      ],
    },
    details: [
      {
        title: "Random bin poses",
        description:
          "Generate densely packed or sparse arrangements of identical parts with arbitrary orientations — the core feed-bin scenario for machine tending pick-and-place.",
      },
      {
        title: "Controlled variation",
        description:
          "Vary part count, lighting direction, container geometry, and camera height while keeping physics-grounded assets and scene parameters consistent.",
      },
      {
        title: "Geometry-aware renders",
        description:
          "Export normal maps and depth from the same scene so perception models learn true part geometry, not just appearance under one lighting setup.",
      },
      {
        title: "Training-ready labels",
        description:
          "Produce RGB, depth, segmentation, bounding boxes, and COCO-format annotations ready for VLA training and robot deployment.",
      },
    ],
    relatedProducts: ["forge", "sentinel", "axion"],
  },
};

export const industrySlugs = Object.keys(industries);

export function getIndustry(slug: string): Industry | undefined {
  return industries[slug];
}
