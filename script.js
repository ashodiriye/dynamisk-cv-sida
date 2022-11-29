const profileBox = document.querySelector(".profile-box")
const experienceBox = document.querySelector(".experience-box")
const educationBox = document.querySelector(".education-box")
const languageBox = document.querySelector(".language-box")
const url = "./data.json"

async function getData (){
    let response = await fetch(url)
    if(response.ok){
        let data = await response.json()
        let mainTitle = Object.keys(data)


        for(i = 0; i < data.profile.length; ++i){
            profileBox.innerHTML +=    `
                                        <ul>
                                            <li>
                                                <h4>${data.profile[i].name}</h4>
                                                <p>${data.profile[i].info}</p>
                                            </li>
                                        </ul>
                                        `
        }
        
        for(i = 0; i < data.experience.length; ++i){
            experienceBox.innerHTML +=   `
                                    <ul>
                                        <li>
                                            <h4>${data.experience[i].name}</h4>
                                            <p>${data.experience[i].info}</p>
                                        </li>
                                    </ul>
                                    `
        }

        for(i = 0; i < data.education.length; ++i){
            educationBox.innerHTML +=   `
                                    <ul>
                                        <li>
                                            <h4>${data.education[i].name}</h4>
                                            <p>${data.education[i].info}</p>
                                        </li>
                                    </ul>
                                    `
        }

        for(i = 0; i < data.languages.length; ++i){
            languageBox.innerHTML +=   `
                                    <ul>
                                        <li>
                                            <h4>${data.languages[i].name}</h4>
                                            <p>${data.languages[i].info}</p>
                                        </li>
                                    </ul>
                                    `
        }
    }
}

getData()

