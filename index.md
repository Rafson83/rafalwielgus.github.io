---
layout: default
title: Rafał Wielgus — blog
description: Osobisty blog o przedsiębiorczości, psychologii biznesu i technologii.
---

<section class="hero">
  <div class="container">
    <h1>Prosto o biznesie, psychologii i technologii</h1>
    <p>Minimalny design, maksymalna czytelność. Zero ściemy.</p>
  </div>
</section>

<div class="container grid" role="region" aria-label="Zawartość">
  <section class="posts" aria-label="Lista wpisów">
    {% for post in site.posts %}
    <article class="post">
      <a class="post__thumb" href="{{ post.url | relative_url }}" aria-label="Czytaj wpis">
        {% if post.thumb %}<img src="{{ post.thumb | relative_url }}" alt="Miniatura: {{ post.title }}">{% endif %}
      </a>
      <div>
        <div class="post__meta">{{ post.date | date: "%-d %B %Y" }}{% if post.reading_time %} • {{ post.reading_time }} min czytania{% endif %}{% if post.category %} • Kategoria: {{ post.category }}{% endif %}</div>
        <h2 class="post__title"><a href="{{ post.url | relative_url }}">{{ post.title }}</a></h2>
        {% if post.description %}<p class="post__excerpt">{{ post.description }}</p>{% endif %}
        <a class="post__read" href="{{ post.url | relative_url }}">Czytaj
          <svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M5 12h14M13 5l7 7-7 7" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
        </a>
      </div>
    </article>
    {% endfor %}
  </section>

  <aside class="sidebar" aria-label="Pasek boczny">
    <section class="card">
      <h3>O blogu</h3>
      <p class="muted">Piszę, jak ogarniać firmę i siebie — bez lania wody.</p>
    </section>
    <section class="card">
      <h3>Kategorie</h3>
      <nav class="tags">
        <a class="tag" href="{{ '/categories/#biznes' | relative_url }}">Biznes</a>
        <a class="tag" href="{{ '/categories/#psychologia' | relative_url }}">Psychologia</a>
        <a class="tag" href="{{ '/categories/#technologia' | relative_url }}">Technologia</a>
      </nav>
    </section>
  </aside>
</div>

<section id="bio" class="section">
  <div class="container">
    <h2>BIO</h2>
    <p>Rafał Wielgus — przedsiębiorca, bloger, specjalista od biznesu i technologii. Piszę o tym, jak efektywnie zarządzać czasem, budować odporność psychiczną i automatyzować procesy w biznesie.</p>
  </div>
</section>

<section id="media" class="section">
  <div class="container">
    <h2>MEDIA</h2>
    <p>Artykuły i publikacje na temat biznesu, psychologii i technologii.</p>
    <!-- Tu można dodać listę artykułów -->
  </div>
</section>

<section id="kontakt" class="section">
  <div class="container">
    <h2>KONTAKT</h2>
    <p>Skontaktuj się ze mną: <a href="mailto:rafal@example.com">rafal@example.com</a></p>
  </div>
</section>