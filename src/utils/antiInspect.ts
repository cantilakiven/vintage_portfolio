// Aggressive Anti-Inspect + Fake Security Lockdown
export const initAntiInspect = () => {
  document.addEventListener("DOMContentLoaded", () => {
    const body = document.getElementById("mainBody") || document.body;

    // Disable right-click
    body.addEventListener("contextmenu", (e) => e.preventDefault());

    // Keyboard detection
    const blockedKeys = new Set([123, 83, 85, 67, 73, 74]); // F12, S, U, C, I, J
    document.addEventListener("keydown", (e) => {
      if (
        blockedKeys.has(e.keyCode) &&
        (e.keyCode === 123 || e.ctrlKey) &&
        !(e.keyCode === 83 && !e.ctrlKey) // allow normal S without Ctrl
      ) {
        e.preventDefault();
        triggerLockdown();
        return false;
      }
    });

    // Detect window dev tools resizing
    const devToolsThreshold = 200;
    setInterval(() => {
      if (
        window.outerWidth - window.innerWidth > devToolsThreshold ||
        window.outerHeight - window.innerHeight > devToolsThreshold
      ) {
        triggerLockdown();
      }
    }, 1000);

    // Detect console open via toString
    const detectConsole = () => {
      const obj = {
        toString() {
          triggerLockdown();
          return "";
        },
      };
      console.log(obj);
    };
    detectConsole();

    // Trigger the aggressive lockdown page
    function triggerLockdown() {
      // Replace body content
      document.body.innerHTML = `
        <style>
          @keyframes flash {
            0%,50%,100% { background:#000;color:#ff0000; }
            25%,75% { background:#ff0000;color:#fff; }
          }
          @keyframes glitch {
            0% { transform: translate(2px,0); }
            20% { transform: translate(-2px,-2px); }
            40% { transform: translate(-1px,1px); }
            60% { transform: translate(1px,-1px); }
            80% { transform: translate(-1px,1px); }
            100% { transform: translate(0,0); }
          }
          body {
            background:#000;
            color:#ff0000;
            font-family:'Courier New',monospace;
            display:flex;
            flex-direction:column;
            justify-content:center;
            align-items:center;
            height:100vh;
            animation: flash 0.5s infinite;
            user-select:none;
            cursor:not-allowed;
            overflow:hidden;
          }
          h1 {
            font-size:4rem;
            letter-spacing:4px;
            text-transform:uppercase;
            text-shadow:0 0 20px red,0 0 50px crimson;
            animation: glitch 0.3s infinite;
          }
          p {
            font-size:1.2rem;
            color:#fff;
            margin-top:20px;
          }
        </style>
        <div>
          <h1>🚨 SECURITY BREACH DETECTED 🚨</h1>
          <p>Unauthorized inspection attempt recorded.</p>
          <p>System lockdown engaged... Restarting...</p>
        </div>
      `;

      // Disable all interactions
      const disableEvent = (e: Event) => e.preventDefault();
      ["keydown", "contextmenu", "click", "mousemove"].forEach((evt) =>
        document.addEventListener(evt, disableEvent, true)
      );

      console.clear();

      // Reload every second
      setInterval(() => window.location.reload(), 1000);
    }
  });
};
