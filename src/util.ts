export const accountId = 'e7f438d3-899c-4291-bd12-9681d692e336'



export function calculateAverage(array : number[]) {
    var total = 0;
    var count = 0;

    array.forEach(function(item) {
        total += item;
        count++;
    });

    return total / count;
}


export const Bashcolors = {'1':'#D32F2F',
'2':'#0ED989',
'3':'#0828F8',
'4':'#F2DA07',
'5':'#F89208',
 '6':'#6937C7',
'7': '#FFFFFF'}

export const letterColors = {'First':'#D32F2F',
'Second':'#0ED989',
'Third':'#0828F8',
'Fourth':'#F2DA07',
'Fifth':'#F89208',
 'Sixth':'#6937C7',
'All': '#FFF'}


export const average = (array: number[]) => array.reduce((a, b) => a + b) / array.length;



export function getBase64Image(img: HTMLImageElement): string {
    const canvas = document.createElement("canvas");
    canvas.width = img.width || 0;
    canvas.height = img.height || 0;

    const ctx = canvas.getContext("2d");
    
    if (ctx) {
        ctx.drawImage(img, 0, 0);
        const dataURL = canvas.toDataURL("image/png");
        return dataURL.replace(/^data:image\/(png|jpg);base64,/, "");
    } else {
        throw new Error("Canvas 2D context is not supported.");
    }
}


export function generateDashpodID(email: string, name: string, phone: string): string {
    // Combine email, name, and phone to create a string for hashing
    const inputString = `${email}${name}${phone}`;

    console.log('inputString',inputString,hashCode(inputString).toUpperCase());
    


function hashCode(str: string): string {
    let hash = 0;
    for (let i = 0, len = str.length; i < len; i++) {
        let chr = str.charCodeAt(i);
        hash = (hash << 5) - hash + chr;
        hash |= 0; // Convert to 32bit integer
    }
    return hash.toString();
}

    // Generate the hash and remove unwanted characters
    const rawID = hashCode(inputString).replace(/[-01IO]/g, '').toUpperCase();

    // Ensure the ID is exactly 8 characters long
    const dashpodID = rawID.substr(0, 8);

    return dashpodID;
}


export function getRandomIntAsString(min: number, max: number): string {
    const randomInt = Math.floor(Math.random() * (max - min) + min);
    return randomInt.toString();
}


