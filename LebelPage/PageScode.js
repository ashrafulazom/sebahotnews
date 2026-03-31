<script type="text/javascript">
  var postsPerPage = 11; // প্রথম পাতা: ১ বড় + ৬ ছোট। পরের পাতাগুলোতে ৭টি ছোট।
  var currentPage = 1;
  var allPosts = [];

  function fetchPosts(json) {
    if (json.feed.entry) {
      allPosts = json.feed.entry;
      displayPosts();
    } else {
      document.getElementById('post-display').innerHTML = "কোনো পোস্ট পাওয়া যায়নি।";
    }
  }

  function displayPosts() {
    const displayArea = document.getElementById('post-display');
    displayArea.innerHTML = '';

    // প্রথম পাতার জন্য কাস্টম রেঞ্জ (১ Featured + ৬ Grid)
    let start, end;
    if (currentPage === 1) {
      start = 0;
      end = postsPerPage;
    } else {
      // পরের পাতাগুলোর জন্য রেঞ্জ ফিক্সড করা (যাতে প্রথম পোস্ট রিপিট না হয়)
      // আমরা প্রথম পোস্ট বাদ দিয়ে প্যাজিনেশন করতে পারি, অথবা সাধারণভাবে।
      // সাধারণ পদ্ধতি:
      start = (currentPage - 1) * postsPerPage;
      end = start + postsPerPage;
    }

    const paginatedPosts = allPosts.slice(start, end);

    paginatedPosts.forEach((entry, index) => {
      let title = entry.title.$t;
      let url = entry.link.find(l => l.rel === 'alternate').href;
      
      // তারিখ ও সময় (বাংলায়)
      let publishedDate = new Date(entry.published.$t);
      let dateString = publishedDate.toLocaleDateString('bn-BD', { day: 'numeric', month: 'long', year: 'numeric' });
      let timeString = publishedDate.toLocaleTimeString('bn-BD', { hour: '2-digit', minute: '2-digit' });

      // ডেসক্রিপশন
      let snippet = entry.summary ? entry.summary.$t : (entry.content ? entry.content.$t.replace(/<[^>]*>?/gm, '').substring(0, 200) : "বিস্তারিত পড়ুন...");
      
      // ইমেজ
      let imgUrl = "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEis_D6v6T8Uu9vX7T-S0wR7-jZ5S_Yf_7_S-f/s1600/no-image.png";
      if (entry.media$thumbnail) {
        imgUrl = entry.media$thumbnail.url.replace('/s72-c', '/s800'); // বড় ছবি Featured এর জন্য
      }

      // ক্লাসের নাম ঠিক করা (প্রথম পোস্টের জন্য আলাদা)
      let cardClass = "post-card grid-post";
      if (currentPage === 1 && index === 0) {
        cardClass = "post-card featured-post";
      }

      displayArea.innerHTML += `
        <a class="${cardClass}" href="${url}">
          <div class="image-wrapper">
            <img class="post-image" src="${imgUrl}" alt="${title}">
          </div>
          <div class="post-content">
            <h3 class="post-title">${title}</h3>
            <div class="post-meta">
              <span>📅 ${dateString}</span>
              <span>⏰ ${timeString}</span>
            </div>
            <p class="post-snippet">${snippet}...</p>
          </div>
        </a>
      `;
    });

    // বাটন কন্ট্রোল
    document.getElementById('prevBtn').disabled = (currentPage === 1);
    document.getElementById('nextBtn').disabled = (end >= allPosts.length);
  }

  function nextPage() {
    currentPage++;
    displayPosts();
    scrollToTop();
  }

  function prevPage() {
    currentPage--;
    displayPosts();
    scrollToTop();
  }

  function scrollToTop() {
    window.scrollTo({
      top: document.getElementById('label-grid-root').offsetTop - 50,
      behavior: 'smooth'
    });
  }
</script>
