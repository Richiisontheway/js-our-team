// MILESTONE 0

const team = [
    {
        name: 'Wayne barnet',
        role: 'Founder & CEO',
        image: 'wayne-barnett-founder-ceo.jpg'
    },
    {
        name: 'Angela Caroll',
        role: 'Chief Editor',
        image: 'angela-caroll-chief-editor.jpg'
    },
    {
        name: 'Walter Gordon',
        role: 'Office Manager',
        image: 'walter-gordon-office-manager.jpg',
    },
    {
        name: 'Angela Lopez',
        role:'Social Media Manager',
        image:'angela-lopez-social-media-manager.jpg'
    },
    {
        name: 'Scott Estrada',
        role:'Developer',
        image:'scott-estrada-developer.jpg'
    },
    {
        name: 'Barbara Ramos',
        role:'Graphic Designer',
        image:'barbara-ramos-graphic-designer.jpg'
    }
]
console.log('array', team, typeof team);
//MILESTONE 1
team.forEach(member => {
    console.log(`Nome: ${member.name}, Ruolo: ${member.role}, Foto: ${member.image}`);
});
// MILESTONE 2
const teamContainer = document.getElementById("team-container");

team.forEach(member => {

    const memberInfo = document.createElement("p");

    memberInfo.innerHTML = `Name: ${member.name}, Role: ${member.role}, image: ${member.image}`;

    teamContainer.appendChild(memberInfo);
    
});