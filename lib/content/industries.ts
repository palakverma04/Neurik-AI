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
      "Input text descriptions of depth, height, width, wrinkles intensity, and other physical properties. Neurik AI uses PINNs and generative AI to create physically accurate synthetic data with corner cases for fashion inspection and handling workflows.",
    pills: [
      "Wrinkles intensity",
      "Dimensions",
      "COCO annotations",
      "Lighting variation",
    ],
    details: [
      {
        title: "Controlled generation",
        description:
          "Generate variations across garment dimensions, folds, wrinkles, layout, lighting, shadows, and reflections.",
      },
      {
        title: "Robot-ready data",
        description:
          "Create physically accurate 3D assets and simulate them in Isaac Sim for training VLAs and robots.",
      },
      {
        title: "Camera geometry",
        description:
          "Provide camera intrinsics and extrinsics to render accurate images from specified perspectives.",
      },
      {
        title: "Training labels",
        description:
          "Export depth, segmentation, bounding boxes, and preferential annotations in COCO format.",
      },
    ],
    relatedProducts: ["forge", "sentinel"],
  },
  electronics: {
    slug: "electronics",
    name: "Electronics",
    description:
      "Start from CAD models of parts or precise dimensional descriptions. Generate physically accurate synthetic data of electronics parts under different lighting, reflections, and defect conditions.",
    pills: ["CAD input", "Part dimensions", "Defects", "Reflections"],
    details: [
      {
        title: "CAD-to-data",
        description:
          "Use CAD models or accurate part descriptions as input to create controlled synthetic scenes.",
      },
      {
        title: "Defect coverage",
        description:
          "Generate variations such as dents, defects, surface changes, and part-level corner cases.",
      },
      {
        title: "Inspection conditions",
        description:
          "Render under different lighting setups, reflections, camera poses, and industrial viewing angles.",
      },
      {
        title: "Annotations",
        description:
          "Export depth maps, segmentation masks, bounding boxes, and COCO-compatible labels.",
      },
    ],
    relatedProducts: ["forge", "sentinel"],
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
    relatedProducts: ["forge", "sentinel", "runtime"],
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
    relatedProducts: ["forge", "sentinel", "runtime"],
  },
};

export const industrySlugs = Object.keys(industries);

export function getIndustry(slug: string): Industry | undefined {
  return industries[slug];
}
