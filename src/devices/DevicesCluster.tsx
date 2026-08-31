import React, { useState, useEffect } from 'react';
import './DevicesCluster.css';

const LAPTOP_COMMAND = 'zeox run --task "Optimize vector memory index"';
const TABLET_PROMPT = 'Generate dark mode dashboard layout';

export const DevicesCluster: React.FC = () => {
  const [laptopText, setLaptopText] = useState<string>('');
  const [tabletText, setTabletText] = useState<string>('');
  const [isSyncedToPC, setIsSyncedToPC] = useState<boolean>(false);
  const [executionDone, setExecutionDone] = useState<boolean>(false);

  useEffect(() => {
    let laptopIdx = 0;
    let tabletIdx = 0;
    let laptopTimer: ReturnType<typeof setInterval>;
    let tabletTimer: ReturnType<typeof setInterval>;
    let syncTimer: ReturnType<typeof setTimeout>;
    let doneTimer: ReturnType<typeof setTimeout>;
    let resetTimer: ReturnType<typeof setTimeout>;

    const startTypingLoop = () => {
      laptopIdx = 0;
      tabletIdx = 0;
      setLaptopText('');
      setTabletText('');
      setIsSyncedToPC(false);
      setExecutionDone(false);

      // 1. Laptop Typing Effect
      laptopTimer = setInterval(() => {
        if (laptopIdx < LAPTOP_COMMAND.length) {
          setLaptopText(LAPTOP_COMMAND.slice(0, laptopIdx + 1));
          laptopIdx++;
        } else {
          clearInterval(laptopTimer);

          // 2. Tablet Prompt Typing Effect
          tabletTimer = setInterval(() => {
            if (tabletIdx < TABLET_PROMPT.length) {
              setTabletText(TABLET_PROMPT.slice(0, tabletIdx + 1));
              tabletIdx++;
            } else {
              clearInterval(tabletTimer);

              // 3. Trigger Host PC Sync
              syncTimer = setTimeout(() => {
                setIsSyncedToPC(true);

                doneTimer = setTimeout(() => {
                  setExecutionDone(true);

                  resetTimer = setTimeout(() => {
                    startTypingLoop();
                  }, 4500);
                }, 600);
              }, 350);
            }
          }, 45);
        }
      }, 50);
    };

    startTypingLoop();

    return () => {
      clearInterval(laptopTimer);
      clearInterval(tabletTimer);
      clearTimeout(syncTimer);
      clearTimeout(doneTimer);
      clearTimeout(resetTimer);
    };
  }, []);

  return (
    <div className="devices-cluster">
      {/* ================= A. CENTRAL MAIN MONITOR (Host PC Workstation - Center Back) ================= */}
      <div className="device-wrapper device-monitor">
        <div className="monitor-frame">
          <div className="monitor-screen">
            {/* Header Bar */}
            <div className="screen-header-bar">
              <div className="screen-dots">
                <span className="dot dot-red" />
                <span className="dot dot-yellow" />
                <span className="dot dot-green" />
              </div>
              <span className="screen-title">zeox-daemon // Workstation Host Node (127.0.0.1:8420)</span>
            </div>

            {/* Local Host Agent Engine Workspace */}
            <div className="monitor-dashboard-body">
              {/* Top Engine Specs Bar */}
              <div className="engine-specs-bar">
                <div className="spec-chip">
                  <span className="spec-tag">MODEL</span>
                  <div className="spec-meta">
                    <span className="spec-label">LOCAL MODEL</span>
                    <span className="spec-val">Llama 3.3 70B (Quantized)</span>
                  </div>
                </div>

                <div className="spec-chip">
                  <span className="spec-tag">HW/GPU</span>
                  <div className="spec-meta">
                    <span className="spec-label">HARDWARE ACCEL</span>
                    <span className="spec-val">RTX 4090 · 48.5 tok/s</span>
                  </div>
                </div>

                <div className="spec-chip">
                  <span className="spec-tag">P2P</span>
                  <div className="spec-meta">
                    <span className="spec-label">LOCAL BRIDGE</span>
                    <span className="spec-val">e2e P2P Tunnel Active</span>
                  </div>
                </div>
              </div>

              {/* Main Content Split: Agent Terminal Stream (Left) + Remote Client Hub (Right) */}
              <div className="host-split-grid">
                {/* Left: Agent Core Execution Log */}
                <div className="agent-terminal-box">
                  <div className="box-title-bar">
                    <span>AGENT DAEMON LOG</span>
                    <span className="live-tag">LIVE ENGINE</span>
                  </div>
                  <div className="terminal-lines">
                    <div className="t-line"><span className="t-time">12:53:01</span> <span className="t-host">[HOST]</span> Initializing Local Agent Memory...</div>
                    <div className="t-line"><span className="t-time">12:53:02</span> <span className="t-gpu">[GPU]</span> Loaded Llama-3.3-70B into VRAM (18.4 / 24GB)</div>

                    {/* Dynamic Synchronized Command from Remote Devices */}
                    {isSyncedToPC && (
                      <>
                        <div className="t-line highlight-t-line sync-pop-in">
                          <span className="t-time">LIVE</span> <span className="t-exec">[LAPTOP]</span> $ {LAPTOP_COMMAND}
                        </div>
                        <div className="t-line highlight-t-line sync-pop-in">
                          <span className="t-time">LIVE</span> <span className="t-exec">[TABLET]</span> PROMPT: "{TABLET_PROMPT}"
                        </div>
                      </>
                    )}

                    {executionDone && (
                      <div className="t-line sync-pop-in">
                        <span className="t-time">LIVE</span> <span className="t-gpu">[GPU SUCCESS]</span> Synchronized 2 remote tasks in 0.84s
                      </div>
                    )}

                    {!isSyncedToPC && (
                      <div className="t-line"><span className="t-time">12:53:04</span> <span className="t-net">[NET]</span> Waiting for remote client stream...</div>
                    )}
                  </div>
                </div>

                {/* Right: Remote Clients Connection Matrix */}
                <div className="clients-matrix-box">
                  <div className="box-title-bar">
                    <span>CONNECTED REMOTE CLIENTS</span>
                    <span className="count-tag">3 PAIRED</span>
                  </div>
                  <div className="client-rows">
                    <div className={`client-item ${laptopText.length > 0 ? 'client-active-sync' : ''}`}>
                      <span className="client-badge">LAPTOP</span>
                      <div className="client-info">
                        <span className="client-name">MacBook Pro</span>
                        <span className="client-sub">{laptopText.length > 0 ? 'Streaming terminal command...' : 'Terminal Synced'}</span>
                      </div>
                      <span className="ping-pill">8ms</span>
                    </div>

                    <div className={`client-item ${tabletText.length > 0 ? 'client-active-sync' : ''}`}>
                      <span className="client-badge">TABLET</span>
                      <div className="client-info">
                        <span className="client-name">iPad Pro</span>
                        <span className="client-sub">{tabletText.length > 0 ? 'Sending prompt request...' : 'Touch Agent Canvas'}</span>
                      </div>
                      <span className="ping-pill">11ms</span>
                    </div>

                    <div className="client-item">
                      <span className="client-badge">MOBILE</span>
                      <div className="client-info">
                        <span className="client-name">iPhone Pro</span>
                        <span className="client-sub">Voice Command Stream</span>
                      </div>
                      <span className="ping-pill">14ms</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="monitor-chin" />
        </div>
        <div className="monitor-stand">
          <div className="stand-pillar" />
          <div className="stand-base" />
        </div>
      </div>

      {/* ================= B. LAPTOP (MacBook Pro - Front Left) ================= */}
      <div className="device-wrapper device-laptop">
        <div className="laptop-display">
          <div className="laptop-screen">
            <div className="laptop-header-bar">
              <span className="laptop-dot dot-green" />
              <span className="laptop-tab">Remote Terminal (SSH Tunnel)</span>
            </div>
            <div className="laptop-terminal-body">
              <p className="term-prompt-info">[CONNECTED] p2p://workstation-host.local:8420 (12ms)</p>
              <p className="term-prompt">$ {laptopText}<span className="term-cursor" /></p>
              {isSyncedToPC && <p className="term-output">[12ms P2P TUNNEL SENT] -&gt; Host PC</p>}
              {executionDone && <p className="term-code">&gt; Host Rig: "Task completed in 0.84s"</p>}
            </div>
          </div>
        </div>
        <div className="laptop-base-chassis">
          <div className="laptop-notch-cut" />
        </div>
      </div>

      {/* ================= C. TABLET (iPad Pro - Mid Right) ================= */}
      <div className="device-wrapper device-tablet">
        <div className="tablet-frame">
          <div className="tablet-camera-dot" />
          <div className="tablet-screen">
            <div className="tablet-top-bar">
              <span className="tablet-pill-title">AGENT PROMPT CANVAS</span>
              <span className="tablet-battery">11ms</span>
            </div>

            <div className="tablet-canvas-body">
              <div className="canvas-prompt-input-box">
                <span className="prompt-box-label">AGENT PROMPT INPUT</span>
                <p className="prompt-text-display">&gt; {tabletText}<span className="term-cursor" /></p>
              </div>

              <div className="canvas-interactive-panel">
                <div className="panel-line">
                  <span className="panel-label">BRIDGE STATUS</span>
                  <span className="panel-value">{isSyncedToPC ? 'Synced to Host' : 'Stream Ready'}</span>
                </div>
                <div className="panel-progress-bar">
                  <div className="panel-progress-fill" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ================= D. PHONE (iPhone Pro - Front Right) ================= */}
      <div className="device-wrapper device-phone">
        <div className="phone-frame">
          <div className="phone-dynamic-island" />
          <div className="phone-screen">
            <div className="phone-time">12:53</div>
            <div className="phone-notification-card">
              <div className="notif-header">
                <span className="notif-logo">ZEOX</span>
                <span className="notif-now">now</span>
              </div>
              <p className="notif-title">Remote Voice Bridge</p>
              <p className="notif-body">"Host agent compiled build in 1.4s"</p>
            </div>
            <div className="phone-voice-pill">
              <span className="voice-wave" />
              <span>Agent Listening...</span>
            </div>
          </div>
          <div className="phone-home-indicator" />
        </div>
      </div>
    </div>
  );
};
