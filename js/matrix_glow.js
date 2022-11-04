const names = [
    'PHẠM NHƯ BẢN',
    'LÊ VIỆT BẰNG',
    'BÙI NHƯ CHINH',
    'VƯƠNG DUY DŨNG',
    'NGUYỄN HÀ ĐẢM',
    'HOÀNG THỊ ĐIỆP',
    'HOÀNG MINH ĐỨC',
    'TRẦN ĐỨC GIANG',
    'ĐỖ THỊ THU HIỀN',
    'PHẠM THỊ HOAN',
    'NGUYỄN CHÍ HƯỚNG',
    'NGUYỄN TRUNG KIÊN',
    'TRẦN THỤC LÊ',
    'BẠCH THỊ DIỆP LIỄU',
    'HOÀNG LINH',
    'BÙI THÙY LINH',
    'NGUYỄN TIẾN LONG',
    'TĂNG THỊ LUYẾN',
    'NGUYỄN XUÂN MAI',
    'NGUYỄN TUẤN MINH',
    'ĐỖ QUANG MINH',
    'VƯƠNG THỊ THÚY NGA',
    'NGUYỄN PHƯƠNG NAM',
    'TRẦN LAN PHƯƠNG',
    'PHẠM MINH PHƯƠNG',
    'LÊ SỸ QUANG',
    'NGUYỄN KHẮC SINH',
    'TRẦN NHẬT TÂN',
    'VŨ QUỐC THÁI',
    'NGUYỄN THỊ MINH THẢO',
    'NGUYỄN QUANG THỊNH',
    'NGUYỄN THỊ THỤC',
    'ĐINH ĐỨC TOÀN',
    'TRẦN ĐỨC TRUNG',
    'NGUYỄN XUÂN TRƯỜNG',
    'PHẠM XUÂN TÚ',
    'HOÀNG HẢI VÂN'
];
const colorHex = ["#00ff00", "#17f500", "#2eea00", "#46e000", "#5dd600", "#74cb00", "#8bc100", "#a2b600", "#b9ac00", "#d1a200", "#e89700", "#ff8d00", "#e37d0f", "#c66e1f", "#aa5e2e", "#8e4e3e", "#713f4d", "#552f5d", "#391f6c", "#1c107c", "#00008b"]; 
//green to blue ["#00ff00", "#00f207", "#00e60e", "#00d915", "#00cc1c", "#00bf23", "#00b32a", "#00a631", "#009938", "#008c3f", "#008046", "#00734c", "#006653", "#00595a", "#004d61", "#004068", "#00336f", "#002676", "#001a7d", "#000d84", "#00008b"];
for (let x = 0; x < names.length; x++) {
    var nsp = Math.floor(Math.random() * 10);
    for (let y = 0; y < nsp; y++) {
        names[x] = ' ' + names[x];
    }
}

const canvas = document.getElementById('Matrix');
const context = canvas.getContext('2d');

canvas.width = window.innerWidth;//Math.floor(window.innerHeight*7/4.5);
canvas.height = window.innerHeight;

const fontSize = 22;
const columns = Math.floor(canvas.width / fontSize);

const rainDrops = [];
const colSize = [];
const colColor = [];
for (let x = 0; x < columns; x++) {
    rainDrops[x] = Math.floor(Math.random() * 15);
    colSize[x] = Math.floor(fontSize - Math.random() * 4);
    //colColor[x]=colorHex[Math.floor(Math.random()*colorHex.length)];
}
const draw = () => {
    context.fillStyle = 'rgba(0, 0, 0, 0.05)';
    context.fillRect(0, 0, canvas.width, canvas.height);

    for (let i = 0; i < rainDrops.length; i++) {
        var namepos = i + 20;
        while (namepos >= names.length) {
            namepos = namepos - names.length;
        }
        var txtpos = rainDrops[i] - 1;
        while (txtpos >= names[namepos].length) {
            txtpos = txtpos - names[namepos].length;
        }
        const text = names[namepos].charAt(txtpos);
        /*shadow*/
        if (text != " ") {
            context.shadowBlur = 1;
            context.shadowColor = colorHex[20];
            context.fillStyle = colorHex[names[namepos].length - txtpos];
            context.font = 'bold ' + colSize[i] + 'px arial';
            context.fillText(text, i * fontSize, rainDrops[i] * fontSize);
        }
        /*main text*/
        context.fillStyle = colorHex[names[namepos].length - txtpos];
        context.font = 'bold ' + colSize[i] + 'px arial';
        context.fillText(text, i * fontSize, rainDrops[i] * fontSize);

        if (rainDrops[i] * fontSize > canvas.height) {
            rainDrops[i] = 0;
        }
        rainDrops[i]++;
    }

};
setInterval(draw, 45);

