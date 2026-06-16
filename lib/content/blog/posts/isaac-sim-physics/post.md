# Physics Experiments in Isaac Sim

## Overview

This document explores how physics parameters influence the behavior of rigid and deformable food assets in Isaac Sim. The goal is to understand how common PhysX and deformable-body parameters influence the behavior of food assets during dropping, squeezing, and robotic manipulation tasks.

**Tags:** `Food Assets` `Rigid Body Physics` `Deformable Body Physics` `Drop, Squeeze and Grasp Test`

<img src="/blog-assets/isaac-sim-physics/images/scene.png" height="300" alt="Food simulation environment in Isaac Sim" />

*Example food simulation environment used for drop, squeeze, and grasp experiments.*

## Table of Contents

1. Why assets matter
2. Why Isaac Sim
3. Food simulation use case
4. General physics effects
5. Method and setup
6. Testing different assets
7. Observed behavior
8. Appendix: Technical parameter tables

## Why Assets Matter

Simulation quality starts with the asset. In Isaac Sim, every 3D object is modeled as a mesh and is called an asset / prim. The behavior of an object depends on the mesh, collision model, material response, and articulation settings.

When modeling scenes with food, this is especially important because the same object can behave as rigid, soft, sticky, or highly deformable depending on how it is authored.

A good asset carries more than geometry. It carries the assumptions of the scene: mass distribution, collision shape, contact behavior, and the amount of deformation the simulation should allow before the object looks unrealistic.

## Why Isaac Sim

Isaac Sim builds on Omniverse Physics and the PhysX backend, so USD Physics schemas are parsed into simulation objects, stepped forward each frame, and written back to USD. This is important for iteration: objects can be tuned, scenes can be created and simulated, the outcome can be observed, compared, and improved through repeated testing.

Isaac Sim was useful because it allowed every object to be configured with realistic physical behavior. Each asset could be assigned properties such as density, softness, friction, bounce, and damping. This made it possible to compare how different food items behaved during dropping, squeezing, and robotic grasping.

Another advantage of Isaac Sim is that physical properties can be configured programmatically through APIs, making it easy to automate experiments and compare different parameter settings.

## Food Simulation Use Case

Food simulation is useful in packaging, handling, inspection, and robotic manipulation workflows. It allows us to virtually test whether a robot can grasp a soft item without crushing it, whether a dropped product bounces too much, and whether a material behaves like the real object in production or packaging scenarios. Modeling food scenes in Isaac Sim can also help generate training datasets for robots, reducing the gap between simulation and real-world behavior.

Some assets were treated as deformable bodies because shape change is part of the expected behavior. Others were kept rigid because the main interaction of interest was contact, bounce, and ability to slip.

## General Physics Effects

These are the most useful physics properties when tuning assets. Each value changes how the object reacts to gravity, contact, squeezing, and robotic handling. The asset's behavior depends on how these properties are combined in a given scene.

| Parameter | What it controls | In the experiments, increasing it usually meant |
|-----------|------------------|------------------------------------------------|
| Young's modulus | How strongly a soft object resists being stretched, squeezed, or bent. | The asset behaves more like a firm solid. |
| Poisson's ratio | How much the object spreads sideways when compressed from above. | The asset preserves its volume more. Instead of simply flattening, it can bulge a little and push outwards. |
| Density | How heavy the object is for its size. | The asset hit surfaces with more force, settled with more weight, and sometimes produces stronger deformation or impact response. |
| Static friction | How strongly an object resists starting to slide when it is already at rest. | Objects stay in place more easily. |
| Dynamic friction | How much resistance acts while the object is already sliding. | Sliding slows down faster and the assets travel less after impact or contact. |
| Restitution | How much bounce is returned after impact. | Rigid objects bounce more. Soft assets could also rebound more, but too much restitution can make them look unrealistic. |
| Damping | How quickly motion, vibration, and wobble lose energy. | Objects settle faster. |
| Solver position iterations | How much effort the simulation spends resolving contacts and constraints each step. | Contacts become more stable, with less jitter, slipping, and visible interpenetration. |
| Contact offset | How early two objects begin detecting contact before visibly touching. | Objects react sooner, creating a small cushion that helps reduce sudden collisions and penetration. |
| Rest offset | The small separation distance objects try to maintain when resting against each other. | Objects are less likely to sink into each other, but too much separation could make contact look slightly floating. |
| Initial drop gap / start height | How far the object falls before first impact. | The impact becomes stronger, causing more bounce, deformation, vibration, and visible energy in the motion. |

## Method and Setup

To understand how different food items respond to physical interaction, a series of controlled experiments were conducted in Isaac Sim. Each experiment focused on a small set of physics properties while keeping the scene configuration largely unchanged.

The objective was not to reproduce a specific real-world food product, but to observe how common simulation parameters influence visible behavior such as deformation, bouncing, sliding, settling, and robotic grasping.

Three categories of interaction were explored:

### Drop Tests

Objects were released from a certain height and allowed to fall onto a surface under gravity.

These tests were useful for observing:

- Impact response
- Bounce and restitution
- Settling behavior
- Shape recovery after deformation

### Squeeze Tests

Soft assets were compressed between two surfaces to study how they reacted to external forces.

These tests highlighted:

- Compression resistance
- Volume preservation
- Bulging and spreading
- Stability under sustained load

### Pick-and-Place Tests

A robot gripper was used to grasp, lift, transport, and release selected assets.

These experiments focused on:

- Contact stability
- Grip quality
- Slipping behavior
- Deformation during handling

---

## Testing Different Assets

The four food assets below are the core of the experiments.

<div class="blog-asset-grid">
<figure class="blog-asset-card">
<div class="blog-asset-card__media"><img src="/blog-assets/isaac-sim-physics/images/Bun.png" alt="Burger Bun" /></div>
<figcaption class="blog-asset-card__label">Burger Bun</figcaption>
</figure>
<figure class="blog-asset-card">
<div class="blog-asset-card__media"><img src="/blog-assets/isaac-sim-physics/images/corn_kernel.png" alt="Corn Kernels" /></div>
<figcaption class="blog-asset-card__label">Corn Kernels</figcaption>
</figure>
<figure class="blog-asset-card">
<div class="blog-asset-card__media"><img src="/blog-assets/isaac-sim-physics/images/jelly.png" alt="Jelly" /></div>
<figcaption class="blog-asset-card__label">Jelly</figcaption>
</figure>
<figure class="blog-asset-card">
<div class="blog-asset-card__media"><img src="/blog-assets/isaac-sim-physics/images/hamburger_patty.jpeg" alt="Burger Patty" /></div>
<figcaption class="blog-asset-card__label">Burger Patty</figcaption>
</figure>
</div>

### Deformable Food

Burger bun, jelly, and burger patty were modeled as deformable bodies to study compression, recovery, and settling behavior.

### Rigid Food

Corn kernels were modeled as rigid bodies to study contact response, bounce, rotation, and sliding behavior.

The 3D assets can be created using Image to 3D models like Hunyuan 3D or obtained from open-source, free asset libraries like BlenderKit.

<img src="/blog-assets/isaac-sim-physics/images/assets.png" class="blog-asset-preview" alt="3D meshes of each food asset" />

*3D meshes of each food asset.*

---

### Burger Bun

The bun was used to study compression during drops, grip quality during pick-and-place, and flattening under squeeze plates. It is a good example of a soft asset that still needs contact stability.

**Videos:**

<div class="blog-video-grid">
<figure class="blog-video-card">
<figcaption class="blog-video-card__label">Drop</figcaption>
<video class="blog-video" autoplay muted loop playsinline><source src="/blog-assets/isaac-sim-physics/videos/Bun/Bun_Drop2.mp4" type="video/mp4" /></video>
</figure>
<figure class="blog-video-card">
<figcaption class="blog-video-card__label">Pick 1</figcaption>
<video class="blog-video" autoplay muted loop playsinline><source src="/blog-assets/isaac-sim-physics/videos/Bun/Bun_Pick1.mp4" type="video/mp4" /></video>
</figure>
<figure class="blog-video-card">
<figcaption class="blog-video-card__label">Pick 2</figcaption>
<video class="blog-video" autoplay muted loop playsinline><source src="/blog-assets/isaac-sim-physics/videos/Bun/Bun_Pick2.mp4" type="video/mp4" /></video>
</figure>
<figure class="blog-video-card">
<figcaption class="blog-video-card__label">Squeeze</figcaption>
<video class="blog-video" autoplay muted loop playsinline><source src="/blog-assets/isaac-sim-physics/videos/Bun/Bun_Squeeze1.mp4" type="video/mp4" /></video>
</figure>
</div>

---

### Burger Patty

The patty was tested as a deformable item in both drop and robot pick-and-place flows. Its behavior is especially sensitive to release height, finger contact, and whether the gripper can hold without tearing or slipping.

**Videos:**

<div class="blog-video-grid">
<figure class="blog-video-card">
<figcaption class="blog-video-card__label">Drop</figcaption>
<video class="blog-video" autoplay muted loop playsinline><source src="/blog-assets/isaac-sim-physics/videos/Patty/Latest_Patty_Drop2.mp4" type="video/mp4" /></video>
</figure>
<figure class="blog-video-card">
<figcaption class="blog-video-card__label">Pick</figcaption>
<video class="blog-video" autoplay muted loop playsinline><source src="/blog-assets/isaac-sim-physics/videos/Patty/Latest_Patty_Pick1.mp4" type="video/mp4" /></video>
</figure>
</div>

---

### Corn Kernels

The kernels were treated as rigid bodies and used to explore how friction, restitution, and damping affect small object motion. Since the kernels do not visibly deform, the result is mainly about trajectory, settling, and spin.

**Videos:**

<div class="blog-video-grid blog-video-grid--single">
<figure class="blog-video-card">
<figcaption class="blog-video-card__label">Drop</figcaption>
<video class="blog-video" autoplay muted loop playsinline><source src="/blog-assets/isaac-sim-physics/videos/Corn/Corn_Drop3.mp4" type="video/mp4" /></video>
</figure>
</div>

---

### Jelly

Jelly is the clearest deformable example in the set. It is useful for showing how damping, Poisson's ratio, and solver iterations change visible jiggle, bulging, and recovery after contact or squeeze.

**Videos:**

<div class="blog-video-grid">
<figure class="blog-video-card">
<figcaption class="blog-video-card__label">Drop</figcaption>
<video class="blog-video" autoplay muted loop playsinline><source src="/blog-assets/isaac-sim-physics/videos/Jelly/Jelly_Drop1.mp4" type="video/mp4" /></video>
</figure>
<figure class="blog-video-card">
<figcaption class="blog-video-card__label">Pick</figcaption>
<video class="blog-video" autoplay muted loop playsinline><source src="/blog-assets/isaac-sim-physics/videos/Jelly/Jelly_Pick1.mp4" type="video/mp4" /></video>
</figure>
<figure class="blog-video-card">
<figcaption class="blog-video-card__label">Squeeze</figcaption>
<video class="blog-video" autoplay muted loop playsinline><source src="/blog-assets/isaac-sim-physics/videos/Jelly/Jelly_Squeeze2.mp4" type="video/mp4" /></video>
</figure>
</div>

---

## Observed Behavior

### Burger Bun

Softer settings produced more compression and faster settling. The higher-friction gripper setup held better, while the lower-stiffness drop setup showed more visible squashing.

### Corn Kernels

Differences were mostly in bounce, slide, and spin. Lower dynamic friction and lower contact offsets made the kernels travel farther and feel more active after impact.

### Jelly

The jelly showed the strongest deformable response. Higher damping and a softer modulus reduced wobble, while a more aggressive squeeze produced stronger bulging and visible compression.

### Burger Patty

The patty benefited from a higher drop height only when the solver and grip were stable enough to control the extra energy. The pick-and-place flow improved when the fingers closed more deliberately and the contact cushion was slightly larger.

### Key Observations

- Higher damping generally reduced rebound and shortened the settling time.
- Higher drop height increased impact energy, which made bending and vibration more visible.
- Higher Poisson's ratio pushed deformation outward and helped the soft assets keep volume.
- Higher friction improved holding, but careful gripper placement was still necessary.
- Corn kernels mostly demonstrated contact physics rather than shape change.

---

## Appendix: Technical Parameter Tables

For these experiments, the PhysX TGS solver, GPU dynamics, and GPU broadphase were used. The deformable workflow also follows the Deformable Bodies (Beta) path first, and falls back to the legacy deformable API only if the beta hierarchy setup fails. Most scenes used a 240 Hz physics step and 60 Hz render.

**TGS:** Temporal Gauss-Seidel is a PhysX engine constraint solver which provides several advantages over the traditional PGS (Projected Gauss-Seidel) solver, in terms of convergence, preventing penetrations for meshes and it stabilizes high-mass ratio objects.

The asset-specific values set for each physics parameter are recorded here for reference:

---

### Burger Bun: Drop, Pick & Place & Squeeze

| Parameter | Drop | Pick & Place | Squeeze | Effect on behavior |
|-----------|------|--------------|---------|-------------------|
| Young's modulus | 75k / 28k | 5M / 1.5M | 1.5M | Lower : more compression; higher : shape retention under load |
| Poisson's ratio | 0.36 / 0.38 | 0.45 / 0.30 | 0.30 | Higher : more sideways bulge & volume preservation |
| Density | 330 / 260 | 200 / 250 | 250 | Higher : heavier impact & stronger contact forces |
| Dynamic friction | 0.85 / 0.9 | 3.0 / 8.0 | 5.0 | Higher : better grip & less slip during contact |
| Elasticity damping | 0.035 / 0.055 | 0.001 / 0.006 | 0.006 | Higher : less bounce, faster energy loss after release |
| Damping scale | 0.065 / 0.095 | 0.02 / 0.08 | 0.08 | Higher : faster settling & shorter oscillation time |
| Vertex damping | 0.14 / 0.18 | — | 0.12 | Suppresses high-frequency surface vibration |
| Solver iterations | 64 / 80 | — | 64 | Higher : more stable contacts, less jitter |
| Contact offset | 0.005 | — | 0.004 | Larger : earlier contact detection, softer feel |
| Rest offset | 0.001 | — | 0.0005 | Larger : more resting separation, less interpenetration |
| Initial drop gap | 0.08 | — | — | Higher : more impact energy, more bounce & deformation |
| Collision contact offset | — | 0.006 / 0.008 | — | Larger : earlier finger contact, more cushion |
| Collision rest offset | — | 0.001 / 0.0015 | — | Larger : more separation at rest between fingers & bun |
| Gripper friction (static/dynamic) | — | 8/6 – 15/12 | — | Higher : stronger finger hold, less slip during lift |
| Gripper contact offset | — | 0.0045 / 0.007 | — | Larger : fingers make contact earlier |
| Gripper rest offset | — | 0.0008 / 0.001 | — | Larger : slightly bigger resting gap at grip |
| Plate friction | — | — | 3.0 / 2.5 | Higher : stronger plate grip, less sliding during squeeze |

---

### Corn Kernels: Drop

| Parameter | Setup 1 | Setup 2 | Setup 3 | Effect on behavior |
|-----------|---------|---------|---------|-------------------|
| Static friction | 0.55 | 0.28 | 0.38 | Higher : less slip on impact; lower : more slide |
| Dynamic friction | 0.38 | 0.18 | 0.24 | Lower : kernels slide farther after landing |
| Restitution | 0.32 | 0.55 | 0.45 | Higher : more bounce on impact |
| Density | 1200 | 1200 | 1200 | Same density across all setups |
| Explicit mass | 0.0012 kg | 0.0015 kg | 0.0012 kg | Higher : slightly heavier, more inertia |
| Linear damping | 0.01 | 0.0 | 0.002 | Lower : kernels stay in motion longer |
| Angular damping | 0.03 | 0.005 | 0.01 | Lower : kernels spin more freely |
| Max linear velocity | 10.0 | 15.0 | 12.0 | Higher : allows faster travel after impact |
| Max angular velocity | 120.0 | 180.0 | 160.0 | Higher : allows more spin after contact |
| Contact offset | 0.0025 | 0.0015 | 0.0015 | Smaller : tighter contact, less phantom collision |
| Rest offset | 0.00025 | 0.0001 | 0.00005 | Smaller : kernels rest closer together |

---

### Jelly: Drop, Squeeze & Grab

| Parameter | Drop | Squeeze 1 | Squeeze 2 | Grab | Effect on behavior |
|-----------|------|-----------|-----------|------|-------------------|
| Young's modulus | 25k | 25k | 12k | 2.5M | Lower : softer, more deformable; higher : shape-holding for grasp |
| Poisson's ratio | 0.47 | 0.47 | 0.46 | 0.45 | Higher : more sideways bulging & volume preservation |
| Density | 1050 | 1050 | 1050 | 100 | Lower (grab) : less sag while carried |
| Dynamic friction | 0.55 | 0.55 | 0.45 | 5.0 | Higher : better grip; lower : slides more |
| Elasticity damping | 0.004 | 0.004 | 0.003 | 0.05 | Higher : less jiggle, faster energy loss |
| Damping scale | 0.015 | 0.015 | 0.012 | 0.08 | Higher : faster settling, less wobble |
| Vertex damping | 0.04 | 0.04 | 0.035 | — | Higher : suppresses surface oscillation more |
| Solver iterations | 64 | 64 | 56 | 24 | Higher : more stable contacts, needed for soft bodies |
| Contact offset | 0.006 | 0.006 | 0.005 | — | Larger : earlier contact detection & softer feel |
| Rest offset | 0.001 | 0.001 | 0.0005 | — | Larger : more resting separation |
| Initial drop gap | 0.08 | — | — | — | Higher : more impact energy, more bounce & jiggle |
| Target gap ratio | — | 0.70 | 0.45 | — | Lower : stronger compression during squeeze |
| Side clearance | — | 0.010 | 0.006 | — | Smaller : plates start closer to jelly |
| Plate friction | — | 1.8 / 1.3 | 1.2 / 0.9 | — | Higher : more grip, less sliding under plates |
| Collision contact offset | — | — | — | 0.015 | Larger : wider contact cushion for stable grasp |
| Collision rest offset | — | — | — | 0.001 | Larger : more separation at rest with gripper |
| Finger friction (static/dynamic) | — | — | — | 15 / 12 | Higher : very strong hold, no slip during carry |
| Gripper drive stiffness | — | — | — | 2200 | Higher : stronger joint response during grasp |
| Gripper drive damping | — | — | — | 260 | Higher : resists chatter & overshoot |

---

### Burger Patty: Drop & Pick/Place

| Parameter | Drop | Pick and Place Setup 1 | Pick and Place Setup 2 | Effect on behavior |
|-----------|------|------------------------|------------------------|-------------------|
| Young's modulus | 85k | 85k | 85k | Soft patty; easily compressed, holds same softness across all setups |
| Poisson's ratio | 0.49 | 0.49 | 0.49 | Near-incompressible; spreads sideways, retains volume |
| Density | 950 | 950 | 950 | Heavy enough for firm landing; consistent across setups |
| Dynamic friction | 5.5 | 5.5 | 5.5 | High grip surface; same across all variants |
| Elasticity damping | 0.035 | 0.035 | 0.035 | Reduces rebound & wobble consistently |
| Damping scale | 0.22 | 0.22 | 0.22 | Strong energy loss; fast settling |
| Solver iterations | 72 | 72 | 72 | Stable contact & deformation solve |
| Collision contact offset | 0.004 | 0.0035 | 0.0045 | Larger : earlier contact, more cushion; Setup 2 has larger cushion |
| Collision rest offset | 0.0005 | 0.0002 | 0.0005 | Larger : more separation at rest; Setup 2 has larger gap |
| Self-collision | true | true | true | Prevents patty from folding through itself |
| Initial drop gap | 0.045 | — | — | Higher : more impact energy, bounce & bending |
| Finger friction (static/dynamic) | — | 18 / 14 | 18 / 14 | High grip surface; same across variants |
| Finger joint max velocity | — | 0.08 | 0.045 | Lower : slower, more controlled finger closure (Setup 2) |
| Finger drive stiffness | — | 5200 | 12000 | Higher : clamps fingers much harder (Setup 2) |
| Finger drive damping | — | 620 | 1200 | Higher : stronger damping, less chatter (Setup 2) |
| Finger drive max force | — | 9000 | 25000 | Higher : can hold much more firmly (Setup 2) |
