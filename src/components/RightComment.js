import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import { formatDistanceToNow, parseISO } from "date-fns";
import "../assets/style/rightComment.css";
import bunga1 from "../assets/image/wishbox-bunga1.png"

const RightComment = ({ guest }) => {
    const urlApi = "https://localhost:7097/api/UndanganNikah";

    const nama = guest || "Tamu Undangan";
    const [ucapan, setUcapan] = useState("");
    const [kehadiran, setKehadiran] = useState("Pilih");
    const [comments, setComments] = useState([]);
    const [pesan, setPesan] = useState("");
    const [tipePesan, setTipePesan] = useState(""); // "success" atau "error"
    const [isVisible, setIsVisible] = useState(false);
    const timeoutRef = useRef(null);

    // Pagination
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 10; // Atur jumlah item per halaman

    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const currentData = comments.slice(startIndex, endIndex);

    const goToPage = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    const totalPages = Math.ceil(comments.length / itemsPerPage);

    const renderPagination = () => {
        if (currentData <= 1) {
            return null;
        }

        const maxPagesToShow = 3; // Atur jumlah halaman yang ingin ditampilkan
        let startPage = Math.max(currentPage - Math.floor(maxPagesToShow / 2), 1);
        let endPage = startPage + maxPagesToShow - 1;

        if (endPage > totalPages) {
            endPage = totalPages;
            startPage = Math.max(endPage - maxPagesToShow + 1, 1);
        }

        return (
            <div className="comments-pagination">
                <button
                    onClick={() => goToPage(currentPage - 1)}
                    disabled={currentPage === 1}
                >
                    ← Previous
                </button>
                {Array.from({ length: endPage - startPage + 1 }, (_, index) => {
                    const pageNumber = startPage + index;
                    return (
                        <button
                            key={pageNumber}
                            onClick={() => goToPage(pageNumber)}
                            className={currentPage === pageNumber ? "active" : ""}
                        >
                            {pageNumber}
                        </button>
                    );
                })}
                <button
                    onClick={() => goToPage(currentPage + 1)}
                    disabled={currentPage === totalPages}
                >
                    Next →
                </button>
            </div>
        );
    };
    // End Pagination

    // Fungsi untuk submit form
    const handleSubmit = async (e) => {
        e.preventDefault();
        if (ucapan.trim() === "" || kehadiran === "Pilih") {
            setPesan("Harap isi ucapan dan pilih konfirmasi kehadiran.");
            setTipePesan("error");
            setIsVisible(true);

            // Hapus timeout sebelumnya jika ada
            if (timeoutRef.current) {
                clearTimeout(timeoutRef.current);
            }

            // Mulai proses fade out setelah 3 detik
            timeoutRef.current = setTimeout(() => {
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
            const response = await axios.post(urlApi, data, {
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

        // Hapus timeout sebelumnya jika ada
        if (timeoutRef.current) {
            clearTimeout(timeoutRef.current);
        }

        // Mulai proses fade out setelah 3 detik
        timeoutRef.current = setTimeout(() => {
            setIsVisible(false);
            setTimeout(() => setPesan(""), 500);
        }, 3000);
    };

    // Fungsi untuk fetch data komentar
    const fetchComments = async () => {
        try {
            const response = await axios.get(urlApi);
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
            {/* <img src={bunga1} alt="Bunga" className="wishbox-bunga1" /> */}
            <div className="wrapperCommentRight">
                <form onSubmit={handleSubmit} className="commentForm animate-on-scroll">
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
                            <option value="Pilih" disabled>Pilih Kehadiran</option>
                            <option value="Hadir">Hadir</option>
                            <option value="Tidak Hadir">Tidak Hadir</option>
                        </select>
                    </div>
                    <div className="d-flex justify-content-center">
                        <button type="submit">Kirim</button>
                    </div>
                    {/* {pesan && (
                        
                    )} */}

                    <div
                        className={`alert-box ${tipePesan} ${!isVisible ? "hidden" : ""
                            }`}
                    >
                        {pesan}
                    </div>
                </form>

                <div className="d-flex justify-content-center animate-on-scroll">
                    <div className="comments-container">
                        <div className="comments-header">
                            <h4>{comments.length} Ucapan</h4>
                        </div>
                        {currentData.length === 0 ? (
                            <div className="comments-closed-message">
                                Belum ada ucapan, jangan malu untuk menulis sesuatu! 😊
                            </div>
                        ) : (
                            <ul className="comments-list">
                                {currentData.map((comment, index) => (
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
                        {renderPagination()}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RightComment;
