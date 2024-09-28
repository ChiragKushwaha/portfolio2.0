"use client";
import React, {
  PropsWithChildren,
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";

type EdgeOrCorner =
  | "top"
  | "bottom"
  | "left"
  | "right"
  | "top-left"
  | "top-right"
  | "bottom-left"
  | "bottom-right";

interface Rect {
  bottom: number;
  height: number;
  left: number;
  right: number;
  top: number;
  width: number;
  x: number;
  y: number;
}

interface UseResizableProps {
  initialRect: Rect;
  delta: number;
}

const useResizable = ({ initialRect, delta }: UseResizableProps) => {
  const popupRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [dragEdge, setDragEdge] = useState<EdgeOrCorner | null>(null);
  const [cursor, setCursor] = useState<string>("default");
  const [rect, setRect] = useState<Rect>(initialRect);

  const detectEdgeOrCorner = useCallback(
    (event: MouseEvent): EdgeOrCorner | null => {
      if (!popupRef.current) return null;

      const rect = popupRef.current.getBoundingClientRect();
      const x = event.clientX - rect.left;
      const y = event.clientY - rect.top;

      const isLeftEdge = x < delta;
      const isRightEdge = x > rect.width - delta;
      const isTopEdge = y < delta;
      const isBottomEdge = y > rect.height - delta;

      if (isLeftEdge && isTopEdge) return "top-left";
      if (isRightEdge && isTopEdge) return "top-right";
      if (isLeftEdge && isBottomEdge) return "bottom-left";
      if (isRightEdge && isBottomEdge) return "bottom-right";
      if (isLeftEdge) return "left";
      if (isRightEdge) return "right";
      if (isTopEdge) return "top";
      if (isBottomEdge) return "bottom";

      return null;
    },
    [delta]
  );

  const getCursorStyle = useCallback((edge: EdgeOrCorner | null): string => {
    switch (edge) {
      case "top":
      case "bottom":
        return "ns-resize";
      case "left":
      case "right":
        return "ew-resize";
      case "top-left":
      case "bottom-right":
        return "nwse-resize";
      case "top-right":
      case "bottom-left":
        return "nesw-resize";
      default:
        return "default";
    }
  }, []);

  const handleResize = useCallback(
    (event: MouseEvent) => {
      if (!isDragging || !dragEdge || !popupRef.current) return;

      const newRect = { ...rect };
      const { clientX, clientY } = event;

      const deltaX = clientX - rect.left;
      const deltaY = clientY - rect.top;

      switch (dragEdge) {
        case "top":
          newRect.top = clientY;
          newRect.height = rect.bottom - newRect.top;
          break;
        case "bottom":
          newRect.height = deltaY;
          break;
        case "left":
          newRect.left = clientX;
          newRect.width = rect.right - newRect.left;
          break;
        case "right":
          newRect.width = deltaX;
          break;
        case "top-left":
          newRect.top = clientY;
          newRect.left = clientX;
          newRect.width = rect.right - newRect.left;
          newRect.height = rect.bottom - newRect.top;
          break;
        case "top-right":
          newRect.top = clientY;
          newRect.width = deltaX;
          newRect.height = rect.bottom - newRect.top;
          break;
        case "bottom-left":
          newRect.left = clientX;
          newRect.width = rect.right - newRect.left;
          newRect.height = deltaY;
          break;
        case "bottom-right":
          newRect.width = deltaX;
          newRect.height = deltaY;
          break;
      }

      setRect(newRect);
    },
    [isDragging, dragEdge, rect]
  );

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      if (isDragging && dragEdge) {
        handleResize(event);
      } else {
        const edge = detectEdgeOrCorner(event);
        setCursor(getCursorStyle(edge));
      }
    };

    const handleMouseUp = () => {
      setIsDragging(false);
      setDragEdge(null);
    };

    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseup", handleMouseUp);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseup", handleMouseUp);
    };
  }, [isDragging, dragEdge, detectEdgeOrCorner, getCursorStyle, handleResize]);

  const handleMouseDown = useCallback(
    (event: React.MouseEvent<HTMLDivElement>) => {
      const edge = detectEdgeOrCorner(event.nativeEvent);
      if (edge) {
        setIsDragging(true);
        setDragEdge(edge);
      }
    },
    [detectEdgeOrCorner]
  );

  return { popupRef, isDragging, cursor, rect, handleMouseDown };
};

interface PopupProps {
  initialRect: Rect;
}

const ResizablePopup: React.FC<PropsWithChildren<PopupProps>> = ({
  initialRect,
  children,
}) => {
  const { popupRef, cursor, rect, handleMouseDown } = useResizable({
    initialRect,
    delta: 10,
  });

  return (
    <div
      ref={popupRef}
      style={{
        position: "absolute",
        left: `${rect.left}px`,
        top: `${rect.top}px`,
        width: `${rect.width}px`,
        height: `${rect.height}px`,
        cursor: cursor,
        border: "1px solid black",
        userSelect: "none",
      }}
      onMouseDown={handleMouseDown}
    >
      {children}
    </div>
  );
};

export { ResizablePopup, useResizable };
