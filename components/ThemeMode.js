import { useState, useEffect } from "react";

export default function ThemeMode() {
  const currentTheme = document.documentElement.dataset.theme;
  return currentTheme;
}
