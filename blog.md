---
layout: default
title: Blog — Rafał Wielgus
permalink: /blog/
---
<div class="container article">
  <h1>Blog</h1>
  <div class="meta">Wszystkie wpisy</div>
  <div class="posts">
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
  </div>
</div>