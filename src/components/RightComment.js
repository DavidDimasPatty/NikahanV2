import React, { useState, useEffect } from "react";
import axios from "axios";
import { formatDistanceToNow, parseISO } from "date-fns";
import "../assets/style/rightComment.css";

const RightComment = ({ guest }) => {
    const nama = guest || "Tamu Undangan";
    const [ucapan, setUcapan] = useState("");
    const [kehadiran, setKehadiran] = useState("Pilih");
    const [comments, setComments] = useState([]);
    const [pesan, setPesan] = useState("");
    const [tipePesan, setTipePesan] = useState(""); // "success" atau "error"
    const [isVisible, setIsVisible] = useState(false);

    // Fungsi untuk submit form
    const handleSubmit = async (e) => {
        e.preventDefault();
        if (ucapan.trim() === "" || kehadiran === "Pilih") {
            setPesan("Harap isi ucapan dan pilih konfirmasi kehadiran.");
            setTipePesan("error");
            setIsVisible(true);

            // Mulai proses fade out setelah 5 detik
            setTimeout(() => {
                setIsVisible(false);
                setTimeout(() => setPesan(""), 500);
            }, 3000);
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
                setPesan("Ucapan berhasil dikirim!");
                setTipePesan("success");
                setIsVisible(true);
                setUcapan("");
                setKehadiran("Pilih");
                fetchComments();
            } else {
                setPesan("Gagal mengirim ucapan.");
                setTipePesan("error");
                setIsVisible(true);
            }
        } catch (error) {
            setPesan("Terjadi kesalahan, silakan coba lagi.");
            setTipePesan("error");
            setIsVisible(true);
            // console.error("Error saat mengirim data:", error);
        }

        // Mulai proses fade out setelah 5 detik
        setTimeout(() => {
            setIsVisible(false); // Mulai animasi fade out
            setTimeout(() => setPesan(""), 500); // Hapus pesan setelah animasi selesai
        }, 3000);
    };

    // Fungsi untuk fetch data komentar
    const fetchComments = async () => {
        try {
            const response = await axios.get("https://localhost:7097/api/UndanganNikah");
            setComments(response.data);
        } catch (error) {
            // console.error("Gagal mengambil komentar:", error);
        }
    };

    useEffect(() => {
        fetchComments();
    }, []);

    return (
        <div className="wrapperCommentRightInduk">
            <div className="wrapperCommentRight">
                <form onSubmit={handleSubmit} className="commentForm">
                    <div className="titleCommentForm">Wish Box</div>
                    <div className="d-flex justify-content-center">
                        <textarea
                            placeholder="Tulis ucapan di sini..."
                            value={ucapan}
                            onChange={(e) => setUcapan(e.target.value)}
                            required
                        />
                    </div>
                    <div className="d-flex justify-content-center">
                        <select
                            value={kehadiran}
                            onChange={(e) => setKehadiran(e.target.value)}
                            required
                        >
                            <option value="Pilih">== Pilih Kehadiran ==</option>
                            <option value="Hadir">Hadir</option>
                            <option value="Tidak Hadir">Tidak Hadir</option>
                        </select>
                    </div>
                    <div className="d-flex justify-content-center">
                        <button type="submit">Kirim</button>
                    </div>
                    {pesan && (
                        <div
                            className={`alert-box ${tipePesan} ${!isVisible ? "hidden" : ""
                                }`}
                        >
                            {pesan}
                        </div>
                    )}
                </form>

                <div className="comments-container">
                    <div className="comments-header">
                        <h4>{comments.length} Ucapan</h4>
                    </div>
                    {comments.length === 0 ? (
                        <div className="comments-closed-message">
                            Belum ada ucapan, jangan malu untuk menulis sesuatu! 😊
                        </div>
                    ) : (
                        <ul className="comments-list">
                            {comments.map((comment, index) => (
                                <li key={index} className="comment-item">
                                    <div className="comment-icon">🕊️</div>
                                    <div className="comment-content">
                                        <div className="comment-name">{comment.Nama}</div>
                                        <div className="comment-time">
                                            {comment.Addtime
                                                ? formatDistanceToNow(parseISO(comment.Addtime), {
                                                    addSuffix: true,
                                                })
                                                : ""}
                                        </div>
                                        <div className="comment-text">{comment.Ucapan}</div>
                                        <div className="comment-kehadiran">{comment.Konfirmasi_Kehadiran}</div>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    )}
                    <div className="comments-pagination">
                        <a href="#prev">← Previous</a>
                        <a href="#1">1</a>
                        <a href="#2">2</a>
                        <a href="#3">3</a>
                        <a href="#next">Next →</a>
                    </div>
                </div>


            </div>
        </div>
    );
};

export default RightComment;
