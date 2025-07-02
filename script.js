const svg = document.getElementById("graph");

const link = document.createElement("link");
link.href = "https://fonts.googleapis.com/css2?family=Cormorant:ital,wght@0,300..700;1,300..700&display=swap";
link.rel = "stylesheet";
document.head.appendChild(link);

// Set maximum size limits
const maxWidth = 900;
const maxHeight = 500;
const totalGridWidth = maxWidth * 2;
let viewBoxX = 0;
const visibleWidth = maxWidth;

let currentWidth = maxWidth;
let currentHeight = maxHeight;
let targetWidth = maxWidth;
let targetHeight = maxHeight;
let resizing = false;

// Linear interpolation function
function lerp(start, end, t) {
    return start + (end - start) * t;
}

// Smoothly animate resize
function animateResize() {
    if (!resizing) return;

    currentWidth = lerp(currentWidth, targetWidth, 0.1);
    currentHeight = lerp(currentHeight, targetHeight, 0.1);

    svg.setAttribute("width", currentWidth);
    svg.setAttribute("height", currentHeight);
    svg.setAttribute("viewBox", `${viewBoxX} 0 ${visibleWidth} ${currentHeight}`);

    // Redraw the elements smoothly
    drawGrid(svg, totalGridWidth, currentHeight, 100, 30);
    drawBars(svg, totalGridWidth, currentHeight, 50, 30);
    drawMarks(svg, totalGridWidth, currentHeight, 50);
}

// Handle window resize event with smooth animation
function resizeGraph() {
    targetWidth = maxWidth;
    targetHeight = maxHeight;

    const axisLabelDiv = document.getElementById("chart-label"); 
    if (axisLabelDiv) {
        axisLabelDiv.style.height = `${targetHeight}px`;
        axisLabelDiv.style.width = `${targetWidth * 0.1}px`;
    }

    if (!resizing) {
        resizing = true;
        requestAnimationFrame(animateResize);
    }
}

function drawGrid(svg, width, height, xLines, yLines) {
    const spacingX = width / xLines;
    const spacingY = height / yLines;

    // Remove existing lines before redrawing
    svg.innerHTML = '';

    // Draw vertical lines
    for (let i = 0; i <= xLines; i++) {
        let x = i * spacingX;
        let line = document.createElementNS("http://www.w3.org/2000/svg", "line");
        line.setAttribute("x1", x);
        line.setAttribute("y1", 0);
        line.setAttribute("x2", x);
        line.setAttribute("y2", height);
        line.setAttribute("stroke", "gray");
        line.setAttribute("stroke-width", "0.5");
        line.setAttribute("opacity", "0.5");
        svg.appendChild(line);
    }

    // Draw horizontal lines
    for (let i = 0; i <= yLines; i++) {
        let y = i * spacingY;
        let line = document.createElementNS("http://www.w3.org/2000/svg", "line");
        line.setAttribute("x1", 0);
        line.setAttribute("y1", y);
        line.setAttribute("x2", width);
        line.setAttribute("y2", y);
        line.setAttribute("stroke", "gray");
        line.setAttribute("stroke-width", "0.5");
        line.setAttribute("opacity", "0.5");
        svg.appendChild(line);
    }
}

function drawBars(svg, width, height, xLines, yLines) {
    const spacingY = height / yLines;
    const spacingX = width / xLines;
    const barData = [
        {
            xStart: 11, 
            xEnd: 11.75, 
            yIndex: 6, 
            color: "#e9f7f2", 
            hoverColor: "#f7d4cb", 
            heading: "Modern Approach to S.E.A.",
            title: "Typesetter/Editor", 
            date: "Jan. 2020 - Apr. 2020",
            description: "Typeset the Modern Approach to S.E.A. textbook, coordinated remote printing to meet authors’ specifications, and managed website and social media for marketing.", 
            imageUrl: "assets/modernapproachb.png",
        },
        {
            xStart: 11.75, 
            xEnd: 13, 
            yIndex: 6, 
            color: "#e9f7f2", 
            hoverColor: "#cbcff7", 
            heading: "Vistabella & Grant Memorial Presbyterian School",
            title: "Primary School Teachers' Assistant", 
            date: "May 2020 - Dec. 2020",
            description: "Remotely assisted teachers at Vistabella & Grant Memorial Presbyterian Primary School during the COVID-19 transition to online teaching, providing training on Zoom, Google Scholar, and other digital tools for coursework and assessments.", 
            imageUrl: "assets/gmps.jpg",
        },
        {
            xStart: 16.5, 
            xEnd: 18.5, 
            yIndex: 6, 
            color: "#e9f7f2", 
            hoverColor: "#ededed", 
            heading: "Central Statistical Office",
            title: "Statistician I - Associate Professional", 
            date: "Oct. 2022 - Oct. 2023",
            description: "Analyzed and published Trinidad and Tobago’s Retail Price Indices (RPI) and national inflation rate monthly at the Ministry of Planning and Development (C.S.O.). Developed survey methodologies and automated outdated processes to improve efficiency.", 
            imageUrl: "assets/cso.png",
        },
        {
            xStart: -20, 
            xEnd: 6, 
            yIndex: 14, 
            color: "#e9f7f2", 
            hoverColor: "#fceea7", 
            heading: "Presentation College",
            title: "CSEC & CAPE", 
            date: "2010-2017",
            description: "Awarded Open Level National Scholarship; subjects include Applied Mathematics, Pure Mathematics, Physics, Caribbean Studies, and Communication Studies.", 
            imageUrl: "assets/pres.png",
        },
        {
            xStart: 7.83, 
            xEnd: 16, 
            yIndex: 14, 
            color: "#e9f7f2", 
            hoverColor: "#faddb4", 
            heading: "University of Waterloo",
            title: "Bachelor of Mathematics", 
            date: "2018-2022",
            description: "Double Major: Actuarial Science & Statistics Honors", 
            imageUrl: "assets/waterloo.png",
        },
        {
            xStart: 19, 
            xEnd: 23, 
            yIndex: 14, 
            color: "#e9f7f2", 
            hoverColor: "#e9c3f7", 
            heading: "University of Portsmouth",
            title: "MSc Data Analytics", 
            date: "2024~ (ongoing)",
            description: "", 
            imageUrl: "assets/portsmouth.jpg",
        },
        {
            xStart: 1, 
            xEnd: 7.5, 
            yIndex: 22, 
            color: "#e9f7f2", 
            hoverColor: "#f7d4cb", 
            heading: "Scotiabank",
            title: "Women Against Breast Cancer Volunteer", 
            date: "2015-2018",
            description: "Annual volunteer for the Scotiabank Women Against Breast Cancer 5k Walk", 
            imageUrl: "assets/scotia.png",
        },
        {
            xStart: 7.83, 
            xEnd: 16, 
            yIndex: 22, 
            color: "#e9f7f2", 
            hoverColor: "#faddb4", 
            heading: "UWaterloo Clubs",
            title: "Enrolled Clubs in University", 
            date: "2018-2022",
            description: "Statistics Club, Association of Caribbean Students, Actuarial Science Club, Poker Studies Club", 
            imageUrl: "assets/waterloo.png",
        },
        {
            xStart: 16.5, 
            xEnd: 25, 
            yIndex: 22, 
            color: "#e9f7f2", 
            hoverColor: "#f7d4cb", 
            heading: "Scotiabank",
            title: "Women Against Breast Cancer Volunteer", 
            date: "2022~",
            description: "Annual volunteer for the Scotiabank Women Against Breast Cancer 5k Walk", 
            imageUrl: "assets/scotia.png",
        }
    ];

    barData.forEach(bar => {
        let x = bar.xStart * spacingX;
        let barWidth = (bar.xEnd - bar.xStart) * spacingX;
        let y = bar.yIndex * spacingY;
        let barHeight = spacingY * 2;

        let rect = document.createElementNS("http://www.w3.org/2000/svg", "rect");
        rect.setAttribute("x", x);  // Start from left
        rect.setAttribute("y", y);
        rect.setAttribute("width", barWidth);
        rect.setAttribute("height", barHeight);
        rect.setAttribute("fill", bar.color);
        rect.setAttribute("rx", 5);
        rect.setAttribute("ry", 5)
        rect.setAttribute("stroke", "black");
        rect.setAttribute("stroke-width", "0.75");
        rect.setAttribute("data-original-color", bar.color);
        rect.setAttribute("data-hover-color", bar.hoverColor);
        rect.setAttribute("data-label", bar.label);

        // Store detail information as data attributes
        rect.setAttribute("data-title", bar.title);
        rect.setAttribute("data-date", bar.date);
        rect.setAttribute("data-heading", bar.heading);
        rect.setAttribute("data-description", bar.description);
        rect.setAttribute("data-image", bar.imageUrl);
        
        // Make cursor change to pointer to indicate clickability
        rect.style.cursor = "pointer";

        // Add hover event listeners
        rect.addEventListener("mouseenter", function(e) {
            // Change color on hover
            this.setAttribute("fill", this.getAttribute("data-hover-color"));
            this.setAttribute("stroke-width", "1.5");
        });

        rect.addEventListener("mouseleave", function() {
            // Revert to original color when mouse leaves
            this.setAttribute("fill", this.getAttribute("data-original-color"));
            this.setAttribute("stroke-width", "0.75");
        });

        // Add click event listener
        rect.addEventListener("click", function(e) {
            const title = this.getAttribute("data-title");
            const date = this.getAttribute("data-date");
            const heading = this.getAttribute("data-heading");
            const description = this.getAttribute("data-description");
            const imageUrl = this.getAttribute("data-image");
            
            // Get the position for the detail popup
            const svgRect = svg.getBoundingClientRect();
            const clickX = e.clientX - svgRect.left;
            const clickY = e.clientY - svgRect.top;
            
            // Show detail popup
            showDetailPopup(title, date, heading, description, imageUrl, clickX, clickY);
        });

        svg.appendChild(rect);
    });
}

// Create tooltip element
function createTooltip() {
    const tooltip = document.createElement("div");
    tooltip.id = "graph-tooltip";
    tooltip.style.position = "absolute";
    tooltip.style.padding = "8px";
    tooltip.style.backgroundColor = "rgba(0, 0, 0, 0.7)";
    tooltip.style.color = "white";
    tooltip.style.borderRadius = "4px";
    tooltip.style.fontSize = "12px";
    tooltip.style.pointerEvents = "none";
    tooltip.style.opacity = "0";
    tooltip.style.transition = "opacity 0.2s";
    tooltip.style.zIndex = "1000";
    document.body.appendChild(tooltip);
    return tooltip;
}

// Get or create tooltip
function getTooltip() {
    let tooltip = document.getElementById("graph-tooltip");
    if (!tooltip) {
        tooltip = createTooltip();
    }
    return tooltip;
}

// Show tooltip
function showTooltip(text, x, y) {
    const tooltip = getTooltip();
    tooltip.textContent = text;
    tooltip.style.left = (x + 10) + "px";
    tooltip.style.top = (y + 10) + "px";
    tooltip.style.opacity = "1";
}

// Hide tooltip
function hideTooltip() {
    const tooltip = getTooltip();
    tooltip.style.opacity = "0";
}

// Update tooltip position
function updateTooltipPosition(x, y) {
    const tooltip = getTooltip();
    tooltip.style.left = (x + 10) + "px";
    tooltip.style.top = (y + 10) + "px";
}

// Create detail popup
function createDetailPopup() {
    // Create popup container
    const popup = document.createElement("div");
    popup.id = "detail-popup";
    popup.style.position = "absolute";
    popup.style.padding = "15px";
    popup.style.backgroundColor = "white";
    popup.style.boxShadow = "0 4px 8px rgba(0,0,0,0.2)";
    popup.style.borderRadius = "8px";
    popup.style.width = "400px";
    popup.style.opacity = "0";
    popup.style.transition = "opacity 0.3s";
    popup.style.zIndex = "2000";
    popup.style.display = "none";
    
    // Create close button
    const closeButton = document.createElement("button");
    closeButton.innerHTML = "×";
    closeButton.style.position = "absolute";
    closeButton.style.right = "10px";
    closeButton.style.top = "10px";
    closeButton.style.border = "none";
    closeButton.style.background = "none";
    closeButton.style.fontSize = "20px";
    closeButton.style.cursor = "pointer";
    closeButton.style.fontWeight = "bold";
    closeButton.style.color = "#555";
    closeButton.addEventListener("click", hideDetailPopup);
    
    // Create content container
    const content = document.createElement("div");
    
    // Append elements
    popup.appendChild(closeButton);
    popup.appendChild(content);
    document.body.appendChild(popup);
    
    return popup;
}

// Get or create detail popup
function getDetailPopup() {
    let popup = document.getElementById("detail-popup");
    if (!popup) {
        popup = createDetailPopup();
    }
    return popup;
}

// Show detail popup
function showDetailPopup(title, date, heading, description, imageUrl, x, y) {
    const popup = getDetailPopup();
    const content = popup.querySelector("div");
    
    // Set content
    content.innerHTML = `
        <div style="display: flex; align-items: center; justify-content: felx-start; font-family: 'Cormorant', serif;">
            <img src="${imageUrl}" alt="${heading}" style="width: 50px; margin-right: 10px;">
            <div>
                <h2 style="margin: 0; color: #333;">${heading}</h2>
                <h3 style="color: #333;">${title}</h3>
                <h4 style="color: #333;">${date}</h4>
            </div>
        </div>
        <p style="margin: 0; color:rgb(0, 0, 0); line-height: 1.5; font-family: 'Cormorant', serif;">${description}</p>
    `;

    
    // Position popup near the clicked element but ensure it's visible
    const cursorX = event.clientX;
    const cursorY = event.clientY;
    const windowWidth = window.innerWidth;
    const windowHeight = window.innerHeight;
    const popupWidth = 400;  // width defined in style
    const popupHeight = 350; // approximate height
    
    // Calculate position to avoid going off-screen
    let leftPos = cursorX;
    let topPos = cursorY;
    
    // Adjust position if needed
    if (leftPos + popupWidth > windowWidth - 10) {
        leftPos = windowWidth - popupWidth - 10;
    }
    
    if (topPos + popupHeight > windowHeight - 10) {
        topPos = windowHeight - popupHeight - 10;
    }
    
    // Apply position
    popup.style.left = leftPos + "px";
    popup.style.top = topPos + "px";
    
    // Show popup with transition
    popup.style.display = "block";
    setTimeout(() => {
        popup.style.opacity = "1";
    }, 10);
    
    // Close popup when clicking 
    setTimeout(() => {
        document.addEventListener('click', closePopupOnClick);
    }, 10);
}

// Close popup when clicking 
function closePopupOnClick(e) {
    const popup = getDetailPopup();
    if (!popup.contains(e.target) && e.target.tagName !== "rect") {
        hideDetailPopup();
        document.removeEventListener('click', closePopupOnClick);
    }
}

// Hide detail popup
function hideDetailPopup() {
    const popup = getDetailPopup();
    popup.style.opacity = "0";
    setTimeout(() => {
        popup.style.display = "none";
    }, 300);
    document.removeEventListener('click', closePopupOnClick);
}

function drawMarks(svg, width, height, xLines) {
    const spacingX = width / xLines;
    const markData = [];
    let j = 0;

    for (let i = 1; i <= xLines; i += 2) {
        j++;
        markData.push({xIndex: i, color: "grey", label: "'" + (j+14).toString()});
    }

    markData.forEach(mark => {
        let x = mark.xIndex * spacingX;
        let y1 = height - 5;  // Slightly above the bottom
        let y2 = height;       // At the bottom
        let textY = height - 15;

        let line = document.createElementNS("http://www.w3.org/2000/svg", "line");
        line.setAttribute("x1", x);
        line.setAttribute("y1", y1);
        line.setAttribute("x2", x);
        line.setAttribute("y2", y2);
        line.setAttribute("stroke", mark.color);
        line.setAttribute("stroke-width", "1");

        // Draw label text
        let text = document.createElementNS("http://www.w3.org/2000/svg", "text");
        text.setAttribute("x", x);
        text.setAttribute("y", textY);
        text.setAttribute("fill", "black");
        text.setAttribute("font-size", "12px");
        text.setAttribute("text-anchor", "middle"); // Center text under mark
        text.textContent = mark.label; // Label content

        svg.appendChild(line);
        svg.appendChild(text);
    });
}

window.addEventListener("resize", function () {
    let div = document.querySelector(".chart-label");
    if (window.innerWidth < 1100) {
      div.style.display = "none";
    } else {
      div.style.display = "block";
    }
  });


function drawFutureBlocker(svg) {
    if (!svg) {
        console.error("SVG element not found");
        return;
    }

    // Ensure the SVG has a valid viewBox, otherwise use client dimensions
    const maxWidth = svg.viewBox.baseVal.width || svg.clientWidth; 
    const maxHeight = svg.viewBox.baseVal.height || svg.clientHeight; 
    const visibleWidth = maxWidth * 0.86; // Right side positioning

    const blockWidth = maxWidth * 0.14; 
    const blockX = visibleWidth; 

    // Check if gradient already exists; if not, create it
    let defs = svg.querySelector("defs");
    if (!defs) {
        defs = document.createElementNS("http://www.w3.org/2000/svg", "defs");
        svg.prepend(defs);
    }

    let gradient = svg.querySelector("#futureBlockerGradient");
    if (!gradient) {
        gradient = document.createElementNS("http://www.w3.org/2000/svg", "linearGradient");
        gradient.setAttribute("id", "futureBlockerGradient");
        gradient.setAttribute("x1", "0%");
        gradient.setAttribute("y1", "0%");
        gradient.setAttribute("x2", "100%");
        gradient.setAttribute("y2", "0%");

        let stop1 = document.createElementNS("http://www.w3.org/2000/svg", "stop");
        stop1.setAttribute("offset", "10%");
        stop1.setAttribute("stop-color", "rgba(255, 255, 255, 0)");

        let stop2 = document.createElementNS("http://www.w3.org/2000/svg", "stop");
        stop2.setAttribute("offset", "50%");
        stop2.setAttribute("stop-color", "rgb(248, 248, 248)"); 

        gradient.appendChild(stop1);
        gradient.appendChild(stop2);
        defs.appendChild(gradient);
    }

    let rect = document.createElementNS("http://www.w3.org/2000/svg", "rect");
    rect.setAttribute("x", blockX);
    rect.setAttribute("y", 0);
    rect.setAttribute("width", blockWidth);
    rect.setAttribute("height", maxHeight);
    rect.setAttribute("fill", "url(#futureBlockerGradient)");

    svg.appendChild(rect);
}

document.addEventListener("DOMContentLoaded", () => {
    const svg = document.getElementById("graph"); 
    if (!svg) {
        console.error("SVG not found in the DOM.");
        return;
    }
    resizeGraph();
    setTimeout(() => drawFutureBlocker(svg), 10);
});