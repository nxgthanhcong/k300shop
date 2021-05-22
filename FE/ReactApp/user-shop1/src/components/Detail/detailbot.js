import React from 'react';

const DetailBot = function () {
    return (
        <div className="detail-bot grid wide">
            <span className="btn--primary btn-detail">Chi tiết sản phẩm</span>
            <table className="detail-bot-table">
                <tbody style={{verticalAlign: 'top'}}>
                    <tr>
                        <td>
                            <p>THÔNG TIN</p>
                            Cổ Tròn<br />
                            Tay Ngắn<br />
                            Vạt Ngang<br />
                            Hình In Trước<br />
                        </td>
                        <td>
                            <p>THƯƠNG HIỆU</p>
                            Từ đầu năm 2016, THE K300 bắt đầu cho ra những sản phẩm made in Vietnam mang xu
                            hướng mới mẻ cùng chất lượng tốt nhất và được bán trên toàn quốc.<br />

                            Các sản phẩm của THE K300 hầu như được lấy cảm hứng từ văn hóa thời trang đường
                            phố, tự do hoặc mang hơi hướng retro.<br />
                        </td>
                        <td>
                            <p>MODEL & SIZE</p>
                            Model's: 60kg/  175cm<br />
                            Size: XL<br />
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <p>CHẤT LIỆU</p>
                            100% Cotton
                        </td>
                        <td>

                        </td>
                        <td>
                            MÃ SẢN PHẨM
                            T2105
                        </td>
                    </tr>
                </tbody>
            </table>
            <style>
                {/*  */}
            </style>
            <style jsx>{`table {
                    border: 1px rgba(0, 0, 0, 0.1);
                }
                table tbody tr td {
                    font-size: '1.4rem',
                    padding: '14px',
                    line-height: '3rem',
                }
                table tbody tr td p {
                    font-size: 1.6rem;
                    font-weight: 700;
                    margin: 10px 0;
                }`}</style>
        </div>
    );
}

export default DetailBot;