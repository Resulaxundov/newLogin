$(document).ready(function() {
    let jobsData = {};

    $("#send-form").click(async function() {
        jobsData.ad = $("#isin-adi").val();
        jobsData.image = $("#image").val();
        jobsData.tecrube = $("#tecrube").val();
        jobsData.tarix = $("#tarix").val();
        jobsData.maas = $("#maas").val();

        console.log(jobsData)

        let art = await axios
        .post("http://localhost:4004/api/create-jobs", jobsData)
        .then(res => {
            window.location.href = "/jobs";
            return res.data;
        })
        .catch(err => {
            console.log("error from api", err);
        })
        console.log(art)
    });
})