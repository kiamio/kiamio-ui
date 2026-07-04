class ConfigButton extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: "open" });
    }

    connectedCallback() {
        this.shadowRoot.innerHTML = `
            <style>
                button {
                    width: 32px;
                    height: 32px;
                    border: none;
                    border-radius: 6px;
                    background: transparent;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    cursor: pointer;
                    color: var(--text-muted, #aaa);
                    transition: background 0.15s ease, transform 0.1s ease;
                }

                button:hover {
                    background: rgba(255, 255, 255, 0.08);
                }

                button:active {
                    transform: scale(0.95);
                }

                svg {
                    width: 16px;
                    height: 16px;
                    fill: currentColor;
                }
            </style>

            <button type="button">
                <svg viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M19.14,12.94a7.43,7.43,0,0,0,.05-.94,7.43,7.43,0,0,0-.05-.94l2.11-1.65a.5.5,0,0,0,.12-.64l-2-3.46a.5.5,0,0,0-.6-.22l-2.49,1a7.28,7.28,0,0,0-1.63-.94l-.38-2.65A.5.5,0,0,0,13.74,2H10.26a.5.5,0,0,0-.49.41L9.39,5.06a7.28,7.28,0,0,0-1.63.94l-2.49-1a.5.5,0,0,0-.6.22l-2,3.46a.5.5,0,0,0,.12.64L4.86,11.06a7.43,7.43,0,0,0,0,1.88L2.75,14.59a.5.5,0,0,0-.12.64l2,3.46a.5.5,0,0,0,.6.22l2.49-1a7.28,7.28,0,0,0,1.63.94l.38,2.65a.5.5,0,0,0,.49.41h3.48a.5.5,0,0,0,.49-.41l.38-2.65a7.28,7.28,0,0,0,1.63-.94l2.49,1a.5.5,0,0,0,.6-.22l2-3.46a.5.5,0,0,0-.12-.64ZM12,15.5A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z"/>
                </svg>
            </button>
        `;
    }
}

customElements.define("config-button", ConfigButton);
