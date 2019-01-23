const createMemoryCard = ({ nameClass, src, alt }) => `
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
