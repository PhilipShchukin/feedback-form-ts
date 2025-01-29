interface IData {
    fullName:string
    email:string
    phone: string
    text:string
}

document.getElementById("feedback-form")?.addEventListener("formValid", () => {

    const DATA: IData = { 
        fullName: (document.getElementById("name") as HTMLInputElement).value,
        email: (document.getElementById("email") as HTMLInputElement).value,
        phone: (document.getElementById("phone") as HTMLInputElement).value,
        text: (document.getElementById("message") as HTMLInputElement).value,
    }

    const POST_SERVER_URL = 'http://localhost:4444'

    async function postData() {
        try {
            const response = await fetch(POST_SERVER_URL, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(DATA)
            })
            const result = await response.json()


            if (result.status === "success" ) {
                const form = document.getElementById("feedback-form") as HTMLFormElement | null;
                const leftSide = document.getElementById("left-side");

                if (form && leftSide) {
                    form.reset();
                    leftSide.innerHTML = `<p class="response-msg">${result.msg}</p>`;
                  }
               

            } else if (result.status === "error") {
                const leftSide = document.getElementById("left-side");

                if (leftSide) {
                    leftSide.innerHTML = `<p class="response-msg">${result.msg}</p>`;
                 }
            }

        } catch (error) {
            console.error('Ошибка: ', error)
        }
    }

    postData()
})