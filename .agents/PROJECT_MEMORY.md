# ZEOX — Project Context & Memory

## 1. Executive Summary
**ZEOX** is a developer tool and cloud bridge protocol that allows users to securely talk to, control, and monitor their local personal AI agents (running on their private PC or local machine) from any device anywhere in the world (mobile, tablet, secondary laptop, web browser).

---

## 2. The Problem
* **Complex Setup**: Running a local personal AI agent (e.g., local LLMs, Ollama, LangChain, AutoGen, custom autonomous agents) previously required complex networking—configuring port forwarding, static IPs, dynamic DNS, VPNs, SSH tunnels, or third-party paid tunneling services.
* **Lack of Multi-Device Control**: Users cannot easily interact with their heavy local workstations from their phones or on-the-go devices.
* **No Remote Telemetry**: When running local models remotely, users have zero visibility into their host machine's physical hardware load, temperature, GPU memory, or agent activity state.

---

## 3. The Solution & Core Features
ZEOX eliminates manual infrastructure with a lightweight protocol:

1. **Instant 1-Line Remote Connection**:
   - Securely connect a local agent to the ZEOX relay via a single command or minimal SDK integration (e.g., `npx zeox connect`).

2. **Universal Multi-Device Access**:
   - Bidirectional real-time streaming to web, iOS, Android, macOS, and Linux clients.
   - Talk to and instruct personal agents from any location with end-to-end encrypted relay.

3. **Real-Time Host Telemetry & Hardware Health**:
   - Live streaming of host compute metrics:
     - GPU utilization, VRAM allocation, temperature
     - CPU load & system RAM usage
     - Live agent execution states & token generation velocity

4. **Zero-Configuration Secure Relay**:
   - No open firewall ports or static IP requirements.
   - End-to-end encrypted data transit between client devices and host machine.

---

## 4. Strict Design & Brand Rules
* **Aesthetic Standard**: Minimal, Apple-level luxury glassmorphism, professional, clean, and distraction-free.
* **Banned Elements**:
  - **NO Emojis** anywhere in the UI or codebase.
  - **NO cheap glows**, bright neon purple/green gradients, or tacky sci-fi clutter.
  - **NO messy or overcrowded layouts**.
* **Visual Tokens**:
  - **Background**: Deep Midnight void (`#01080c`, `#040b0f`) with subtle atmospheric silk gradient sweep.
  - **Typography**: `Reospec` for official brand marks/identity; clean system sans-serif (`Inter` / `SF Pro`) for UI text.
  - **Surfaces**: Frosted glassmorphism (`backdrop-filter: blur(20px)`), 1px borders with subtle white alpha (`rgba(255, 255, 255, 0.08)` to `0.15)`).
