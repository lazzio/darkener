"use client";

import React from "react";
import {
  Menubar,
  MenubarMenu,
  MenubarTrigger,
  MenubarContent,
  MenubarItem,
  MenubarSeparator,
  MenubarLabel,
  MenubarCheckboxItem,
  MenubarRadioGroup,
  MenubarRadioItem,
  MenubarSub,
  MenubarSubTrigger,
  MenubarSubContent,
} from "@/components/ui/menubar";
import { cn } from "@/lib/utils";
import { PreviewProps } from "@/lib/types";

export function MenubarPreview({ color, isDark }: PreviewProps) {
  return (
    <Menubar
        className={cn(isDark ? "text-gray-300" : "text-gray-700")}
        style={{ backgroundColor: color }}
    >
      {/* Premier Menu */}
      <MenubarMenu>
        <MenubarTrigger>File</MenubarTrigger>
        <MenubarContent
            style={{ backgroundColor: color }}
            className={cn(
                "text-white hover:opacity-90 transition-opacity",
                isDark ? "hover:bg-opacity-90" : ""
              )}
        >
          <MenubarItem onSelect={() => console.log("New File")}>
            New File
          </MenubarItem>
          <MenubarItem onSelect={() => console.log("Open File")}>
            Open File
          </MenubarItem>
          <MenubarSeparator />
          <MenubarItem onSelect={() => console.log("Save File")}>
            Save File
          </MenubarItem>
        </MenubarContent>
      </MenubarMenu>

      {/* Deuxième Menu */}
      <MenubarMenu
        className={cn(isDark ? "text-gray-300" : "text-gray-700")}
        style={{ backgroundColor: color }}
      >
        <MenubarTrigger>Edit</MenubarTrigger>
        <MenubarContent
            style={{ backgroundColor: color }}
            className={cn(
                "text-white hover:opacity-90 transition-opacity",
                isDark ? "hover:bg-opacity-90" : ""
              )}
        >
          <MenubarItem onSelect={() => console.log("Undo")}>Undo</MenubarItem>
          <MenubarItem onSelect={() => console.log("Redo")}>Redo</MenubarItem>
          <MenubarSeparator />
          <MenubarCheckboxItem
            checked
            onCheckedChange={(checked) =>
              console.log(`Show Line Numbers: ${checked}`)
            }
          >
            Show Line Numbers
          </MenubarCheckboxItem>
        </MenubarContent>
      </MenubarMenu>

      {/* Troisième Menu avec sous-menu */}
      <MenubarMenu
        className={cn(isDark ? "text-gray-300" : "text-gray-700")}
        style={{ backgroundColor: color }}
      >
        <MenubarTrigger>View</MenubarTrigger>
        <MenubarContent
            style={{ backgroundColor: color }}
            className={cn(
                "text-white hover:opacity-90 transition-opacity",
                isDark ? "hover:bg-opacity-90" : ""
              )}
        >
          <MenubarItem>Zoom In</MenubarItem>
          <MenubarItem>Zoom Out</MenubarItem>
          <MenubarSeparator />
          <MenubarSub>
            <MenubarSubTrigger>Theme</MenubarSubTrigger>
            <MenubarSubContent>
              <MenubarRadioGroup
                value="dark"
                onValueChange={(value) => console.log(`Theme selected: ${value}`)}
              >
                <MenubarRadioItem value="light">Light</MenubarRadioItem>
                <MenubarRadioItem value="dark">Dark</MenubarRadioItem>
              </MenubarRadioGroup>
            </MenubarSubContent>
          </MenubarSub>
        </MenubarContent>
      </MenubarMenu>
    </Menubar>
  );
}
