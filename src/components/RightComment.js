import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";
import { formatDistanceToNow, parseISO } from "date-fns";
import "../assets/style/rightComment.css";

const RightComment = () => {
    const location = useLocation();
    const [nama, setNama] = useState("");
    const [ucapan, setUcapan] = useState("");
    const [kehadiran, setKehadiran] = useState("Pilih");
    const [comments, setComments] = useState([]);

    // Ambil nama dari URL
    useEffect(() => {
        const params = new URLSearchParams(location.search);
        const nameFromUrl = params.get("nama");
        setNama(nameFromUrl || "Tamu Undangan");
    }, [location]);

    // Fungsi untuk submit form
    const handleSubmit = async (e) => {
        e.preventDefault();
        if (ucapan.trim() === "" || kehadiran === "Pilih") {
            alert("Harap isi ucapan dan pilih konfirmasi kehadiran.");
            return;
        }

        const data = {
            nama,
            ucapan,
            konfirmasi_kehadiran: kehadiran,
        };

        try {
            const response = await axios.post("https://localhost:7097/api/UndanganNikah", data, {
                headers: { "Content-Type": "application/json" },
            });
            if (response.status === 200) {
                alert("Ucapan berhasil dikirim!");
                setUcapan(""); // Reset input
                setKehadiran("Pilih");
                fetchComments(); // Refresh comments
            } else {
                alert("Gagal mengirim ucapan.");
            }
        } catch (error) {
            alert("Terjadi kesalahan, silakan coba lagi.");
            console.error("Error saat mengirim data:", error);
        }
    };

    // Fungsi untuk fetch data komentar
    const fetchComments = async () => {
        try {
            const response = await axios.get("https://localhost:7097/api/UndanganNikah");
            setComments(response.data);
        } catch (error) {
            console.error("Gagal mengambil komentar:", error);
        }
    };

    useEffect(() => {
        fetchComments();
    }, []);

    return (
        <div className="wrapperCommentRight">
            <form onSubmit={handleSubmit} className="commentForm">
                <div className="titleCommentForm">Kirim Ucapan</div>
                <textarea
                    placeholder="Tulis ucapan di sini..."
                    value={ucapan}
                    onChange={(e) => setUcapan(e.target.value)}
                    required
                />
                <select
                    value={kehadiran}
                    onChange={(e) => setKehadiran(e.target.value)}
                    required
                >
                    <option value="Pilih">Pilih Kehadiran</option>
                    <option value="Hadir">Hadir</option>
                    <option value="Tidak Hadir">Tidak Hadir</option>
                </select>
                <button type="submit">Kirim</button>
            </form>

            <div className="commentsList">
                <h2>Ucapan</h2>
                {comments.length === 0 ? (
                    <p>Belum ada ucapan.</p>
                ) : (
                    comments.map((comment, index) => (
                        <div key={index} className="commentItem">
                            <h4>{comment.Nama}</h4>
                            <p>{comment.Ucapan}</p>
                            <small>{comment.Konfirmasi_Kehadiran}</small>
                            {/* Format waktu menggunakan date-fns */}
                            <small>
                                {comment.Addtime
                                    ? formatDistanceToNow(parseISO(comment.Addtime), {
                                        addSuffix: true,
                                    })
                                    : ""}
                            </small>
                        </div>
                    ))
                )}
            </div>
        </div>
    );
};

export default RightComment;
