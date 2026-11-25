const p = n => String(n).padStart(2, '0');
// Tanggal LOKAL (bukan UTC) supaya hari berganti tepat tengah malam WIB.
export const hari = (o = 0) => { const d = new Date(Date.now() - o * 864e5); return d.getFullYear() + '-' + p(d.getMonth() + 1) + '-' + p(d.getDate()); };
export const jam = () => { const d = new Date(); return p(d.getHours()) + ':' + p(d.getMinutes()); };
