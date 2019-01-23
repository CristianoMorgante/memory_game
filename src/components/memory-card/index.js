const createMemoryCard = (src, alt, nameClass) => `
    <article class="memory-card ${nameClass}">
        <img
            class='icon'
            src= "${src}" 
            alt="${alt}"
            onclick="handleclick()"  
            />
    </article>
`;

const handleclick = () => console.log("foi");
