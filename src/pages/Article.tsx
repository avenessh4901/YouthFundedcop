import React, { useState, useEffect } from 'react';

// Tipe Data Artikel (Tanpa ID dan Kategori)
interface ArticleItem {
  title: string;
  excerpt: string;
  author: string;
  date: string;
  imageUrl: string;
}

export default function Article() {
  // State untuk menyimpan daftar artikel
  const [articles, setArticles] = useState<ArticleItem[]>(() => {
    const saved = localStorage.getItem('youthfunded_articles');
    return saved ? JSON.parse(saved) : [];
  });

  // State untuk toggle buka/tutup form input
  const [showForm, setShowForm] = useState(false);

  // State untuk data form yang sedang diisi
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [excerpt, setExcerpt] = useState('');

  // Simpan ke localStorage setiap kali ada perubahan daftar artikel
  useEffect(() => {
    localStorage.setItem('youthfunded_articles', JSON.stringify(articles));
  }, [articles]);

  // Fungsi saat form disubmit oleh user/member
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!title || !author || !excerpt) {
      alert('Mohon isi Judul, Penulis, dan Ringkasan Artikel!');
      return;
    }

    const newArticle: ArticleItem = {
      title,
      author,
      excerpt,
      date: new Date().toLocaleDateString('id-ID', {
        day: 'numeric',
        month: 'long',
        year: 'numeric',
      }),
      imageUrl: imageUrl.trim() !== '' 
        ? imageUrl 
        : 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&q=80&w=600',
    };

    // Tambahkan artikel baru ke paling atas daftar
    setArticles([newArticle, ...articles]);

    // Reset isi form
    setTitle('');
    setAuthor('');
    setExcerpt('');
    setImageUrl('');
    setShowForm(false);
  };

  return (
    <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '40px 20px', fontFamily: 'sans-serif' }}>
      
      {/* HEADER SECTION */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '30px', flexWrap: 'wrap', gap: '15px' }}>
        <div>
          <h1 style={{ fontSize: '2.2rem', margin: 0, color: '#1a1a1a' }}>YouthFunded Articles</h1>
          <p style={{ color: '#666', margin: '5px 0 0 0' }}>Ruang publikasi artikel dan gagasan dari tim YouthFunded.</p>
        </div>

        {/* Tombol Buka/Tutup Form Input */}
        <button
          onClick={() => setShowForm(!showForm)}
          style={{
            backgroundColor: showForm ? '#dc3545' : '#0066cc',
            color: '#fff',
            border: 'none',
            padding: '10px 20px',
            borderRadius: '8px',
            fontWeight: 'bold',
            cursor: 'pointer',
            fontSize: '0.95rem'
          }}
        >
          {showForm ? '✖ Batal' : '+ Tambah Artikel Baru'}
        </button>
      </div>

      {/* FORM INPUT ARTIKEL */}
      {showForm && (
        <form 
          onSubmit={handleSubmit}
          style={{
            backgroundColor: '#f8f9fa',
            padding: '25px',
            borderRadius: '12px',
            border: '1px solid #e0e0e0',
            marginBottom: '40px'
          }}
        >
          <h3 style={{ marginTop: 0, marginBottom: '20px', color: '#333' }}>Tulis / Input Artikel Baru</h3>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '15px', marginBottom: '15px' }}>
            <div>
              <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 'bold', marginBottom: '5px' }}>Judul Artikel *</label>
              <input 
                type="text" 
                value={title} 
                onChange={(e) => setTitle(e.target.value)} 
                placeholder="Masukkan judul artikel..."
                style={{ width: '100%', padding: '10px', borderRadius: '6px', border: '1px solid #ccc', boxSizing: 'border-box' }}
              />
            </div>

            <div>
              <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 'bold', marginBottom: '5px' }}>Nama Penulis *</label>
              <input 
                type="text" 
                value={author} 
                onChange={(e) => setAuthor(e.target.value)} 
                placeholder="Contoh: Maria Elen / Hotben"
                style={{ width: '100%', padding: '10px', borderRadius: '6px', border: '1px solid #ccc', boxSizing: 'border-box' }}
              />
            </div>
          </div>

          <div style={{ marginBottom: '15px' }}>
            <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 'bold', marginBottom: '5px' }}>URL Gambar Sampul (Opsional)</label>
            <input 
              type="text" 
              value={imageUrl} 
              onChange={(e) => setImageUrl(e.target.value)} 
              placeholder="Paste link gambar (https://...)"
              style={{ width: '100%', padding: '10px', borderRadius: '6px', border: '1px solid #ccc', boxSizing: 'border-box' }}
            />
          </div>

          <div style={{ marginBottom: '20px' }}>
            <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 'bold', marginBottom: '5px' }}>Ringkasan / Isi Artikel *</label>
            <textarea 
              rows={4} 
              value={excerpt} 
              onChange={(e) => setExcerpt(e.target.value)} 
              placeholder="Tuliskan ringkasan singkat atau poin-poin artikel di sini..."
              style={{ width: '100%', padding: '10px', borderRadius: '6px', border: '1px solid #ccc', boxSizing: 'border-box', resize: 'vertical' }}
            />
          </div>

          <button 
            type="submit" 
            style={{
              backgroundColor: '#28a745',
              color: '#fff',
              border: 'none',
              padding: '12px 24px',
              borderRadius: '6px',
              fontWeight: 'bold',
              cursor: 'pointer'
            }}
          >
            Publikasikan Artikel
          </button>
        </form>
      )}

      {/* DAFTAR ARTIKEL YANG SUDAH DIINPUT */}
      {articles.length === 0 ? (
        <div style={{ textAlign: 'center', padding: '60px 20px', backgroundColor: '#f9f9f9', borderRadius: '12px', border: '2px dashed #ddd' }}>
          <p style={{ color: '#888', fontSize: '1.1rem', margin: 0 }}>Belum ada artikel yang ditambahkan.</p>
          <p style={{ color: '#aaa', fontSize: '0.9rem', marginTop: '5px' }}>Klik tombol <strong>"+ Tambah Artikel Baru"</strong> di atas untuk menambahkan artikel pertamamu!</p>
        </div>
      ) : (
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '25px' }}>
          {articles.map((art, index) => (
            <div 
              key={index}
              style={{
                border: '1px solid #e2e8f0',
                borderRadius: '12px',
                overflow: 'hidden',
                backgroundColor: '#fff',
                boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.05)',
                display: 'flex',
                flexDirection: 'column'
              }}
            >
              <img 
                src={art.imageUrl} 
                alt={art.title} 
                style={{ width: '100%', height: '180px', objectFit: 'cover' }}
              />
              <div style={{ padding: '20px', display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
                <h3 style={{ fontSize: '1.2rem', marginTop: 0, marginBottom: '10px', color: '#111', lineHeight: '1.4' }}>
                  {art.title}
                </h3>
                <p style={{ fontSize: '0.9rem', color: '#555', lineHeight: '1.5', flexGrow: 1, marginBottom: '15px' }}>
                  {art.excerpt}
                </p>
                <div style={{ fontSize: '0.8rem', color: '#888', borderTop: '1px solid #f0f0f0', paddingTop: '10px' }}>
                  Oleh <strong>{art.author}</strong> • {art.date}
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

    </div>
  );
}
