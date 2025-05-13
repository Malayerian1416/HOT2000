<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>PDF Form Editor</title>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/pdf-lib/1.17.1/pdf-lib.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/pdf.js/2.14.305/pdf.min.js"></script>
    <style>
        body { font-family: Arial, sans-serif; text-align: center; }
    </style>
</head>
<body>
<input type="file" id="uploadPdf" accept="application/pdf">
<button id="savePdf">Save PDF</button>
<canvas id="pdfCanvas"></canvas>

<script>
    const uploadPdf = document.getElementById("uploadPdf");
    const savePdf = document.getElementById("savePdf");
    const canvas = document.getElementById("pdfCanvas");

    uploadPdf.addEventListener("change", async (event) => {
        const file = event.target.files[0];
        const reader = new FileReader();

        reader.onload = async function () {
            const pdfData = new Uint8Array(reader.result);
            const loadingTask = pdfjsLib.getDocument({ data: pdfData });
            const pdf = await loadingTask.promise;
            const page = await pdf.getPage(1);
            const context = canvas.getContext("2d");
            const viewport = page.getViewport({ scale: 1 });

            canvas.width = viewport.width;
            canvas.height = viewport.height;
            await page.render({ canvasContext: context, viewport });

            const pdfDoc = await PDFLib.PDFDocument.load(pdfData);
            const form = pdfDoc.getForm();

            form.getFields().forEach(field => {
                if(field instanceof PDFLib.PDFTextField) {
                    console.log(`Field Name: ${field.getName()} | Type: ${field.constructor.name}`);
                    field.setText("aasdsad")
                }
            });

            savePdf.onclick = async () => {
                const modifiedPdfBytes = await pdfDoc.save();
                const blob = new Blob([modifiedPdfBytes], { type: "application/pdf" });
                const link = document.createElement("a");
                link.href = URL.createObjectURL(blob);
                link.download = "modified_form.pdf";
                link.click();
            };
        };

        reader.readAsArrayBuffer(file);
    });
</script>
</body>
</html>
