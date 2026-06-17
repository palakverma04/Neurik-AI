export type IndustryDetail = {
  title: string;
  description: string;
};

export type Industry = {
  slug: string;
  name: string;
  description: string;
  pills: string[];
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
      "Generate package and container scenes with control over orientation, labels, lighting, number of assets, and layout. The pipeline supports physically accurate food inspection and robotic handling datasets.",
    pills: [
      "Package orientation",
      "Labels",
      "Asset count",
      "Containers",
    ],
    details: [
      {
        title: "Orientation control",
        description:
          "Control whether packages face up, down, sideways, or are partially occluded inside containers.",
      },
      {
        title: "Label variation",
        description:
          "Generate different product labels and package appearances for model robustness.",
      },
      {
        title: "Scene density",
        description:
          "Control the number of assets, layout, spacing, occlusions, and container placement.",
      },
      {
        title: "Outputs",
        description:
          "Produce RGB, depth, segmentation, bounding boxes, and COCO-format annotations.",
      },
    ],
    relatedProducts: ["sentinel", "runtime"],
  },
  "machine-tending": {
    slug: "machine-tending",
    name: "Machine tending",
    description:
      "Create simulation-ready machine tending scenes with controlled asset orientations, physically accurate properties, lighting, and camera perspectives for robotics training data.",
    pills: ["Orientations", "Isaac Sim", "Robot data", "VLA training"],
    details: [
      {
        title: "Assets and poses",
        description:
          "Control asset orientation, placement, and scene setup for machine tending workflows.",
      },
      {
        title: "Physical properties",
        description:
          "Generate physically accurate 3D assets with relevant properties for simulation and manipulation tasks.",
      },
      {
        title: "Lighting and cameras",
        description:
          "Specify warehouse lighting, reflections, camera intrinsics, and extrinsics.",
      },
      {
        title: "Training data",
        description:
          "Export annotated images and simulation data that can be used for VLAs and robots.",
      },
    ],
    relatedProducts: ["sentinel", "runtime"],
  },
};

export const industrySlugs = Object.keys(industries);

export function getIndustry(slug: string): Industry | undefined {
  return industries[slug];
}
